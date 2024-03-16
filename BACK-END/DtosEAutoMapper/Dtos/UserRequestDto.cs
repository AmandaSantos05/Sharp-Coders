using System.ComponentModel.DataAnnotations;

namespace DtosEAutoMapper.Dtos;

public class UserRequestDto
{
    [EmailAddress]
    [Required]
    public string? Email { get; set; }

    [Required]
    public string? Username { get; set; }

    [MinLength(8)]
    [Required]
    public string? Password { get; set; }
}