using Microsoft.AspNetCore.Mvc;
using sharpCodingApi.Model;

namespace sharpCodingApi.Controllers;

[ApiController]
[Route("/api/hello")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public string HelloWorld()
    {
        return "Hello World!";
    }

    [HttpGet("person")]
    public Person GetPerson()
    {
        return new Person()
        {
            Name = "Joao",
            Age = 25,
            Height = 1.8
        };
    }

    [HttpPost]
    public string SayHello(Person person)
    {
        return $"Hello, {person.Name}";
    }
}
