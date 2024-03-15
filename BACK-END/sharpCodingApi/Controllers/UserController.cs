using Microsoft.AspNetCore.Mvc;
using sharpCodingApi.Domain.DTO;
using sharpCodingApi.Domain.Model;

namespace sharpCodingApi.Controllers;

[ApiController] //Escutar requisições
[Route("/users")]   //Mapeando os endpoints
public class UserController : ControllerBase
{
    public static List<User> users = new(){
        new(){
            Id = 1,
            Name = "Pedro",
            Email = "pedro@gmail.com",
            password = "pedro123"
        },
        new(){
            Id = 2,
            Name = "Martha",
            Email = "martha@gmail.com" ,
            password = "martha123"
        }
    };

    [HttpGet]
    public IActionResult GetUsers()
    {
        return Ok(users);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult GetUserById(int id)
    {
        User? user = users.Find((user) => user.Id == id);

        if (user == null)
            return NotFound();

        UserProfileDto userProfile = new()
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        };
        return Ok(userProfile);
    }

    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        users.Add(user);

        return Ok("user created!");
    }

    [HttpPost("login")]
    public IActionResult Login(User user)
    {
        users.Add(user);

        return Ok("user created!");
    }

}
