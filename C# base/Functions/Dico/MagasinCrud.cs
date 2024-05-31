using System.Security;

namespace MagasinCrud
{
    class Magasin_crud
    {
        public static void DisplayAll_Magasin(Dictionary<string, List<string>> magasin)
        {
            Console.WriteLine("Liste des articles du magasin:");
            foreach (KeyValuePair<string, List<string>> kvp in magasin)
            {
                Console.WriteLine("{0} :", kvp.Key);
                foreach (string value in kvp.Value)
                {
                    Console.WriteLine("{1}", kvp.Key, value);
                }
            }

        }

        public static void DisplayAll_Article(Dictionary<string, List<string>> magasin)
        {
            Console.WriteLine("Quelles liste d'articles souhaité vous afficher");
            string? liste = Console.ReadLine();
            if (liste == null)
            {
                Console.WriteLine("Type d'article invalide");
                return;
            }
            //On recup les articles de la list  demander par l'user
            List<string> articles = magasin[$"{liste}"];

            Console.WriteLine("Liste des articles: ");
            foreach (string article in articles)
            {
                Console.WriteLine(article);
            }
        }

        public static void AddType_Article(Dictionary<string, List<string>> magasin)
        {

            Console.WriteLine("Entrez le type de l'article:");
            string? type = Console.ReadLine();

            if (type == null)
            {

                Console.WriteLine("Type d'article invalide");
                return;
            }
            else if (magasin.ContainsKey(type))
            {
                Console.WriteLine("Type d'article déjà existant");
                return;
            }
            magasin.Add(type, new List<string>());
            Console.WriteLine("Type d'article ajouté avec succès");
        }

        /* Animal methodes................................................. */
        public static void Add_Animal(Dictionary<string, List<string>> magasin)
        {
            //get the value of key animal
            Console.WriteLine("Entrez le nom de l'animal:");
            string? name = Console.ReadLine();
            if (name == null)
            {
                Console.WriteLine("Nom d'animal invalide");
                return;
            }
            else if (magasin["Animals"].Contains(name))
            {
                Console.WriteLine("Nom d'animal déjà existant");
                return;
            }
            magasin["Animals"].Add(name);
            Console.WriteLine("Animal ajouté avec succès");
        }

        public static void Delete_Animal(Dictionary<string, List<string>> magasin)
        {
            List<string> animals = magasin["Animals"];
            Console.WriteLine("Entrez le nom de l'animal à supprimer:");
            string? name = Console.ReadLine();
            if (name == null)
            {
                Console.WriteLine("Nom d'animal invalide");
                return;
            }
            else if (!animals.Contains(name))
            {
                Console.WriteLine("Nom d'animal inexistant");
                return;
            }
            
            Console.WriteLine("Animal supprimé avec succès");

        }

        public static void Search_Animals(Dictionary<string, List<string>> magasin)
        {
            List<string> animals = magasin["Animals"];
            Console.WriteLine("Entre le nom de l'animal que vous chercher");
            string? name = Console.ReadLine();
            if (name == null)
            {
                Console.WriteLine("Nom d'animal invalide");
                return;
            }

            else if (!animals.Contains(name))
            {
                Console.WriteLine("Nom d'animal inexistant");
                return;
            }
            foreach (string animal in animals)
            {
                if (animal == name)
                {
                    Console.WriteLine($"{name} ce trouve bien dans liste");
                    return;
                }
                Console.WriteLine($"{name} ne ce trouve pas dans la liste");
                return;

            }
        }

        public static void Search_Animal()
        {

        }
    }
}