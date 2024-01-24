using System;

public class Program
{
    public static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        for (int pos = 1; pos <= 10000; pos++)
        {
            if (pos % n == 2)
            {
                Console.WriteLine(pos);
            }
        }
    }
}