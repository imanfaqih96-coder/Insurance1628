using Microsoft.AspNetCore.Identity;

namespace Insurance1628.Models
{
    public class User : IdentityUser<Guid>
    {
        public bool IsAdmin { get; set; }
    }
}
