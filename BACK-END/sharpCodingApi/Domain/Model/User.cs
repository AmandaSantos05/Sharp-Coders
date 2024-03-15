using System.ComponentModel.DataAnnotations;

namespace sharpCodingApi.Domain.Model;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required(AllowEmptyStrings = false, ErrorMessage = "Name is required")]
    public string? Name { get; set; }
    public string? password { get; set; }
    public string? Email { get; set; }
    public DateTime? CreatedAt { get; set; } = DateTime.Now;
    public DateTime? UpdatedAt { get; set; } = DateTime.Now;
}