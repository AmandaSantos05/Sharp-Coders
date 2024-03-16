using DtosEAutoMapper.Dtos;
using DtosEAutoMapper.Models;
using Microsoft.AspNetCore.Mvc;

namespace DtosEAutoMapper.Controllers;

[ApiController]
[Route("users")]
public class UserController : ControllerBase
{

    private static List<User> users = new(){
        new(){
            Id = 1,
            Username = "User1",
            Email = "user1@example.com",
            Password = "User1"
        },
        new(){
            Id = 2,
            Username = "User2",
            Email = "user2@example.com",
            Password = "User2"
        }
    };

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<User>))]
    public IActionResult GetAll()
    {
        if (users.Count == 0)
        {
            return NoContent();
        }

        var userResponse = users.Select(user => new UserResponseDto(user));

        return Ok(userResponse);
    }

    [HttpPost]
    public IActionResult Register(UserRequestDto userRequest)
    {
        bool isEmailAlreadyUsed = users.Any((user) => user.Email == userRequest.Email);

        if (isEmailAlreadyUsed)
        {
            return BadRequest();
        }

        User user = userRequest.ToUser();
        user.Id = users.Count + 1;

        users.Add(user);

        return Created();
    }
}