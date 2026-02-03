namespace Insurance1628.Models
{
    public class SmsVerification
    {
        public Guid Id { get; set; }

        public string Mobile { get; set; } = default!;

        public string Code { get; set; } = default!;

        public DateTime ExpireAt { get; set; }
    }
}
