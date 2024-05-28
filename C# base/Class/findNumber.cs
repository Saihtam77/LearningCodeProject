namespace CpFind{

    class FindNumber{

        static int user_input;
        static int try_count = 0;

        public static void Find_Number_Main(){
            User_select();
            Computer_select();
        }

        //L'uttilisateur doit rentrer un nombre entre 1 et 100
        static void User_select(){
            Console.WriteLine("Enter a number between 1 and 100: ");
            try{
                user_input = int.Parse(Console.ReadLine());
            }
            catch(FormatException){
                Console.WriteLine("Please enter a valid number: ");
                User_select();
            }
        }

        //L'ordinateur doit choisir un nombre aleatoire entre 1 et 100
        static void Computer_select(){
            if (try_count != 5){
                Console.WriteLine("do the number is : "+ Random_Gen() + " ? ");
                Console.WriteLine("1. Yes | 0. No");
                string res=Console.ReadLine();
                if (res == "1"){
                    Console.WriteLine("The computer guessed the number!");
                    return;
                }
                else if (res == "0"){
                    try_count++;
                    Computer_select();
                }
            }
            
            if (try_count == 5){
                Console.WriteLine("The computer did not guess the number!");
            }
            
        }

        
        static int Random_Gen()
        {
            Random rand = new Random();
            int number = rand.Next(1, 101);
            return number;
        }
    }
}