namespace DicoExo{

    class DicoClass {
       
        public static void Dico_Main(){
            
            // Dictionary<string,int> dico = Dico_Gen1();
            // Dictionary<string, int[]> dico2 = Dico_Gen2();
            Dictionary<string, List<string>> dico3 = Dico_Gen3();

            Dico3_Display(dico3);
        }
        //on recup le dico que l'on veut
        public static Dictionary<string,List<string>> Get_Dico(){
            return Dico_Gen3(); //on recup le dico 3 avec key list<string>
        }

        /* Dico gen 1 with key value  */
        static Dictionary<string,int> Dico_Gen1(){
            Dictionary<string,int> dico = new Dictionary<string, int>
            {
                { "Age", 17 },
                { "Height", 3 },
                { "Weight", 4 }
            };
            return dico;
        }
        /* Dico gen 2 with key value type table[] */   
        static Dictionary<string, int[]> Dico_Gen2(){
            Dictionary <string, int[]> dico = new Dictionary <string, int[]>
            {
                {"Age", new int[] {17, 18, 19}},
                {"Height", new int[] {3, 4, 5}},
                {"Weight", new int[] {4, 5, 6}}   
            };
            return dico;
        }
        /* Dico gen 3 with key value type List<> */
        static Dictionary<string, List<string>> Dico_Gen3(){
            Dictionary <string, List<string>> dico = new Dictionary <string, List<string>>
            {
                {"Animals", new List<string> {"Dog", "Cat", "Bird"}},
                {"Objects", new List<string> {"stick", "ball", "car"}},
                {"Words", new List<string> {"hello", "world", "goodbye"}}   
            };
            return dico;
        }


        /* Dico gen 1 methode  */
        //Display the dico
        static void Dico1_Display(Dictionary<string,int> dico){
            foreach (KeyValuePair<string, int> kvp in dico)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            }   
        }

        /* search if the key existe */
        static void Dico1_Search(Dictionary<string,int> dico){
            Console.WriteLine("Enter a key to search for:");
            string? key = Console.ReadLine();
            if(dico.ContainsKey(key)){
                Console.WriteLine("Key found: "+key);
            }
            else{
                Console.WriteLine("Key not found");
            }
        }

        /* search the value of a key */
        static void Dico1_Search_Value(Dictionary<string,int> dico){
            Console.WriteLine("Enter a key to search for:");
            string? key = Console.ReadLine();
            if(dico.ContainsKey(key)){
                dico.TryGetValue(key, out int value);
                Console.WriteLine("Value of key "+key+" is: "+value);
            }
        }

        
        /* .................................................................................................... */   
        /* Dico gen 2 methode  */
        static void Dico2_Display(Dictionary<string, int[]> dico){
            foreach (KeyValuePair<string, int[]> kvp in dico)
            {
                foreach (int value in kvp.Value)
                {
                    Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, value);
                }
            }   
        }

        
        /* ......................................................................................................... */
        /* Dico gen 3 methode */
        static void Dico3_Display(Dictionary<string, List<string>> dico){
            foreach (KeyValuePair<string, List<string>> kvp in dico)
            {
                foreach (string value in kvp.Value)
                {
                    Console.WriteLine("{0} = {1}", kvp.Key, value);
                }
            }   
        }
    
    }
}