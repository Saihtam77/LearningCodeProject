using RandomGenerator;

namespace ListeExo{
    class Liste_search {

        static List<int> list=RandomGen.Random_list(10);
        public static int Liste_search_main(){
            //display list
            Console.WriteLine("Liste de nombres:");
            foreach (int i in list)
            {
                Console.Write(i + " ");
            }
            return 0;
        }
    }
}