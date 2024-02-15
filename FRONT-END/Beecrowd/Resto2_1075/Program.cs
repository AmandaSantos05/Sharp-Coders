using System;

public class Program
{
    public static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n <= 2)
        {
            return;
        }

        for (int i = 2; i <= 10000; i += n)
        {
            Console.WriteLine(i);
        }
    }
}