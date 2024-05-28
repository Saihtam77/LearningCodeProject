namespace RandomApp
{
    class RandomNumber
    {
        //attribut
        static int number;
        static int guess;

        //Methode

        //Lance le programme
        public static void Random_Main()
        {
            Console.WriteLine("Enter a number between 1 and 100: ");
            
            Random_Gen();
            Number_Verif();
        }

        //Genere un nombre aléatoire entre 1 et 100
        static void Random_Gen()
        {
            Random rand = new Random();
            number = rand.Next(1, 101);
        }

        static string Number_Verif(){
            
            try
            {
                guess = int.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter a valid number: ");
                return Number_Verif();
            }
            
            if (guess == number)
            {
                Console.WriteLine("Congratulations, you guessed the number!");
                return "Congratulations, you guessed the number!";
            }

            else if (guess > number)
            {
                Console.WriteLine("Too high, try again: ");
                return Number_Verif();
            }
            
            else
            {
                Console.WriteLine("Too low, try again: ");
                return Number_Verif();
            }
        }        
    }
}