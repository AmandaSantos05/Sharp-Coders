using Microsoft.AspNetCore.Mvc;
using sharpCodingApi.Model;

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

        return user != null ? Ok(user) : NotFound();
    }

    [HttpPost]
    public IActionResult CreateUser(User user)
    {
        users.Add(user);

        return Ok("user created!");
    }

}
