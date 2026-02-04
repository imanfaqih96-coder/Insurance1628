using Insurance1628.Data;
using Insurance1628.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(o =>
    o.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services
    .AddIdentity<User, IdentityRole<Guid>>(o =>
    {
        o.Password.RequiredLength = 6;
        o.Password.RequireDigit = false;
        o.Password.RequireUppercase = false;
        o.Password.RequireNonAlphanumeric = false;
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseRouting(); 

app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/client/{*path:nonfile}", "client/browser/index.html");
app.MapFallbackToFile("/admin/{*path:nonfile}", "admin/browser/index.html");

app.Map("/client/{*any}", clientApp =>
{
    clientApp.Run(async context =>
    {
        context.Response.ContentType = "text/html";
        await context.Response.SendFileAsync(
            Path.Combine(builder.Environment.ContentRootPath, "wwwroot/client/browser/index.html")
        );
    });
});

app.Map("/admin/{*any}", adminApp =>
{
    adminApp.Run(async context =>
    {
        context.Response.ContentType = "text/html";
        await context.Response.SendFileAsync(
            Path.Combine(builder.Environment.ContentRootPath, "wwwroot/admin/browser/index.html")
        );
    });
});

app.MapGet("/", (context) =>
{
    context.Response.Redirect("/client");
    return Task.CompletedTask;
});


app.Run();
