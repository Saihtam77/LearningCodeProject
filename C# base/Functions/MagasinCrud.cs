namespace MagasinCrud{
    class Magasin_crud{
        public static void DisplayAll_Articles(Dictionary<string,List<string>> magasin){
            Console.WriteLine("Liste des articles du magasin:");
            foreach (KeyValuePair<string, List<string>> kvp in magasin)
            {
                foreach (string value in kvp.Value)
                {
                    Console.WriteLine("{0} = {1}", kvp.Key, value);
                }
            }   

        }

        public static void AddType_Article(){

        }
        
        /* Animal methodes................................................. */
        public static void Add_Animal(){

        }

        public static void Delete_Animal(){

        }

        public  static void Display_Animals (){

        }

        public  static  void Search_Animal(){

        }    
    }
}