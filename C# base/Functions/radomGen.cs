namespace RandomGenerator
{
    class RandomGen
    {

        public static int Random_number(int min, int max)
        {
            Random rand = new Random();
            int number = rand.Next(min, max);
            return number;
        }
    }
}