
using RandomGenerator;
using System;
namespace CpuFindNumber2
{

    class CpuFind
    {
        static int number;
        static int min = 1;
        static int max = 101;

        public static void Cpu_find_number_main()
        {
            Console.WriteLine("Enter a number between 1 and 100: ");
            number = Convert.ToInt32(Console.ReadLine());
            verif();
        }

        static void verif()
        {
            int cpu_resp = Cpu_resp();
            Console.WriteLine($"do the number is {cpu_resp} ? (1) yes (2) less (3) greater");
            string user_resp = Console.ReadLine();
            if (isANumber_input(user_resp))
            {
                if (IsEgale(user_resp))
                {
                    Console.WriteLine("the number is " + cpu_resp);
                }
                else if (IsGreater(user_resp))
                {
                    min = cpu_resp + 1;
                    verif();
                }
                else if (IsLess(user_resp))
                {
                    max = cpu_resp;
                    verif();
                }

            }
        }

        static int Cpu_resp()
        {
            int cpu_number = RandomGen.Random_number(min, max);
            return cpu_number;
        }

        static bool Check_resp(string input, string expected)
        {
            return input == expected;
        }

        static bool IsEgale(string input)
        {
            return Check_resp(input, "1");
        }


        static bool IsLess(string input)
        {
            return Check_resp(input, "2");
        }

        static bool IsGreater(string input)
        {
            return Check_resp(input, "3");
        }


        static bool isANumber_input(string input)
        {
            if (input == "1" || input == "2" || input == "3")
            {
                return true;
            }
            else
            {
                Console.WriteLine("Please enter a correct choice (1, 2 or 3)");
                return false;
            }
        }

    }
}