namespace RandomGenerator
{
    class RandomGen
    {
        static Random rand = new Random();
        public static int Random_number(int min, int max)
        {
            int number = rand.Next(min, max);
            return number;
        }
        //@overload
        public static int Random_number(int min)
        {
            int number = rand.Next(min);
            return number;
        }

        // generate random table of numbers ordered ascending
        public static int[] Random_table(int size)
        {
            int[] table = new int[size];
            for (int i = 0; i < size; i++)
            {

                table[i] = Random_number(1, 101);

            }
            Array.Sort(table);
            return table;
        }

        // generate random table of numbers ordered ascending
        public static int[] Random_table2(int size)
        {
            int[] table = new int[size];
            for (int i = 0; i < size; i++)
            {
                int value = Random_number(0, 101);

                //si valeur plus grande que la precedente
                if (value > table[i - 1])
                {
                    table[i] = value;
                }
                //si valeur plus petite que la precedente
                else if (value < table[i - 1])
                {
                    table[i + 1] = table[i];
                    table[i] = value;
                }
            }
            return table;
        }

        public static int[] Random_table3(int size)
        {
            int[] table = new int[size];
            int min = 0;
            int max = min + 20;
            for (int i = 0; i < size; i++)
            {
                int value = Random_number(min, max);
                table[i] = value;
                min = value+1;
            }
            return table;
        }

    }
}