namespace FibonacciEmVetor_1176;

public class Program
{
    public static void Main(string[] args)
    {
        ulong[] fib = new ulong[70];
        int nTestes = int.Parse(Console.ReadLine());

        for (int _ = 0; _ < nTestes; _++)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 2; i <= n; i++)
            {
                fib[i] = fib[i - 1] + fib[i - 2];
            }

            System.Console.WriteLine($"Fib ({n}) = {fib[n]}");

        }
    }
}