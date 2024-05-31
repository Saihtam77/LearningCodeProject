
namespace AgeApp
{

    class AgeVerif
    {
        //attribut
        static int age;
        //methode
        public static void Age_Main()
        {
            Console.WriteLine("Enter your age: ");
            age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(Verif_age(age));
        }

        static string Verif_age(int age)
        {
            if (age >= 18)
            {
                string res = "You are eligible to vote.";
                return res;
            }
            else
            {
                string res = "You are not eligible to vote.";
                return res;
            }
        }
    }


}
