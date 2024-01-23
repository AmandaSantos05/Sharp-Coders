using System;

public class Program
{
    public static void Main()
    {

        string[] entradas = Console.ReadLine().Split(' ');
        int a = int.Parse(entradas[0]);
        int b = int.Parse(entradas[1]);
        int c = int.Parse(entradas[2]);

        if (a < b && a < c)
        {
            Console.WriteLine(a);

            if (b < c)
            {
                Console.WriteLine(b);
                Console.WriteLine(c);
            }
            else
            {
                Console.WriteLine(c);
                Console.WriteLine(b);
            }
        }
        else if (b < a && b < c)
        {
            Console.WriteLine(b);

            if (a < c)
            {
                Console.WriteLine(a);
                Console.WriteLine(c);
            }
            else
            {
                Console.WriteLine(c);
                Console.WriteLine(a);
            }
        }
        else
        {
            Console.WriteLine(c);

            if (a < b)
            {
                Console.WriteLine(a);
                Console.WriteLine(b);
            }
            else
            {
                Console.WriteLine(b);
                Console.WriteLine(a);
            }
        }

        Console.WriteLine();
        Console.WriteLine(a);
        Console.WriteLine(b);
        Console.WriteLine(c);
    }
}