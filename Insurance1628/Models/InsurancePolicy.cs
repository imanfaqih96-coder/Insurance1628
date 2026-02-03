namespace Insurance1628.Models
{
    public class InsurancePolicy
    {
        public Guid Id { get; set; }

        public string PolicyNumber { get; set; } = default!;

        public string? DocumentPath { get; set; }

        public Guid UserId { get; set; }
    }
}
