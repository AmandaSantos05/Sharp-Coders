using System;

namespace MultiplosDe13_1132;

public class Program
{
    static bool IsMultiplo13(int number)
    {
        return number % 13 == 0;
    }

    static void Main(string[] args)
    {
        int inicio = int.Parse(Console.ReadLine());
        int fim = int.Parse(Console.ReadLine());

        if (inicio > fim)
        {
            int aux = inicio;
            inicio = fim;
            fim = aux;
        }

        int soma = 0;

        for (int i = inicio; i <= fim; i++)
        {
            if (!IsMultiplo13(i))
            {
                soma += i;
            }
        }

        Console.WriteLine(soma);
    }
}