using RandomGenerator;
namespace Dsearch
{
    class DsearchClass
    {
        static int[] table;
        static int user_input;

        public static void Search_main()
        {
            //genere un tableau de n entiers
            int size = RandomGen.Random_number(1, 101);
            table = RandomGen.Random_table(10);

            //affiche le tableau
            TableDisplay();
            // //demande a l'utilisateur de rentrer le nombre a chercher$
            user_input = UserValue();

            RecherDichotomique(user_input, table);

        }

        static int Index_search(int user_input, int[] table_toSearch)
        {
            for (int i = 0; i < table_toSearch.Length; i++)
            {
                if (table_toSearch[i] == user_input)
                {
                    Console.WriteLine($"Le nombre {user_input} a ete trouve a l'index: {i} ");
                    return 0;
                }

            }
            Console.WriteLine("Le nombre n'a pas ete trouve");
            return 0;
        }

        static int RecherDichotomique(int user_input, int[] table_toSearch)
        {
            int min = 0;
            int max = table_toSearch.Length - 1;
            int mid = (min + max) / 2;

            while (min <= max)
            {
                if (table_toSearch[mid] == user_input)
                {
                    Console.WriteLine($"Le nombre {user_input} a ete trouve a l'index: {mid} ");
                    return 0;
                }
                else if (table_toSearch[mid] < user_input)
                {
                    min = mid + 1;
                }
                else
                {
                    max = mid - 1;
                }
                mid = (min + max) / 2;
            }
            Console.WriteLine("Le nombre n'a pas ete trouve");
            return 0;
        }

        //recup la valeur de l'utilisateur
        static int UserValue()
        {
            //demande a l'utilisateur de rentrer le nombre a chercher
            int number;
            Console.WriteLine("Entrez le nombre a chercher");
            try
            {
                return number = Convert.ToInt32(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("Entrez un nombre valide");
                return UserValue();
            }

        }


        //methode pour affiche le tableau
        static void TableDisplay()
        {
            foreach (int i in table)
            {
                Console.WriteLine(i);
            }
        }
        //methode pour genere le tableau
        static void TableGen()
        {
            Console.WriteLine("Voici le Tableau genere: ");
            table = RandomGen.Random_table3(10);
            foreach (int value in table)
            {
                Console.WriteLine(value);
            }

        }

        //methode order table

    }
}