using Microsoft.AspNetCore.Mvc;
using sharpCodingApi.Model;

namespace sharpCodingApi.Controllers;

[ApiController] //Escutar requisições
[Route("/users")]   //Mapeando os endpoints
public class UserController : ControllerBase
{
    public List<User> users = new(){
        new(){
            Id = 1,
            Name = "Pedro",
            Email = "pedro@gmail.com",
            Age = 30
        },
        new(){
            Id = 2,
            Name = "Martha",
            Email = "martha@gmail.com" ,
            Age = 25
        }
    };

    [HttpGet]
    public ActionResult<List<User>> GetUsers()
    {
        return Ok(users);
    }

    [HttpGet("{id}")]
    public ActionResult<User?> GetUserById(int id)
    {
        User? user = users.Find((user) => user.Id == id);

        return user != null ? Ok(user) : NotFound();
    }
}
