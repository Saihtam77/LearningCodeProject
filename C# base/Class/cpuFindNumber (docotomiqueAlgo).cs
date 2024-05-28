namespace CpFind
{

    class CpuFindNumber
    {

        static int user_input;
        static int min = 0;
        static int max = 101;

        public static void Cpu_find_number()
        {
            User_select();
            Computer_select();
        }

        //L'uttilisateur doit rentrer un nombre entre 1 et 100
        static void User_select()
        {
            Console.WriteLine("Enter a number between 1 and 100: ");
            try
            {
                user_input = Convert.ToInt32(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter a valid number: ");
                User_select();
            }
        }

        //L'ordinateur doit choisir un nombre aleatoire entre min et max
        static void Computer_select()
        {

            int resp = Random_Gen(min, max);

            //Demander à l'utilisateur si le nombre est le bon
            Console.WriteLine("do the number is " + resp + " ? (1 Yes| 2 less| 3 greater)");

            Number_check(resp);
        }

        //L'ordinateur doit verifier si le nombre est plus grand ou plus petit que le nombre choisi par l'utilisateur
        static void Number_check(int resp)
        {
            int user_resp = Convert.ToInt32(Console.ReadLine());
            //Si le nombre est le bon
            if (user_resp == 1)
            {
                Console.WriteLine("The computer has found the number: " + resp);
                return;
            }
            //Si le nombre est plus petit
            else if (user_resp == 2)
            {
                Console.WriteLine("The computer has chosen the number: " + resp + " which is greater than the number you entered");
                max = resp;
                Computer_select();
            }
            //Si le nombre est plus grand
            else if (user_resp == 3)
            {
                Console.WriteLine("The computer has chosen the number: " + resp + " which is less than the number you entered");
                min = resp + 1;
                Computer_select();
            }
            else
            {
                Console.WriteLine("Please enter a valid number: ");
                Number_check(resp);
            }
        }

        static int Random_Gen(int min, int max)
        {
            Random rand = new Random();
            int number = rand.Next(min, max);
            return number;
        }
    }

}