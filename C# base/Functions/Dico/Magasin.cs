
using DicoExo;
using MagasinCrud;
namespace Magasin
{
    class MagasinClass
    {
        static Dictionary<string, List<string>> magasin = DicoClass.Get_Dico();
        public static void Magasin_main()
        {
            Console.WriteLine("Que voulez-vous faire?");
            choice();
        }

        static void choice()
        {
            Console.WriteLine(@"
            1. Voir les articles
            2. Ajouter un type d'article
            3. Ajouter un animal
            4. Supprimer un animal
            5. Voir les animaux
            6. Rechercher un animal
            "
            );
            choice_select();

            void choice_select()
            {
                Console.WriteLine("Entrez votre choix ... :");
                try
                {
                    int user_input = Convert.ToInt32(Console.ReadLine());
                    Dictionary<int, Action<Dictionary<string,List<string>>>> choices = new()
                    {
                        {1, Magasin_crud.DisplayAll_Magasin},
                        {2, Magasin_crud.AddType_Article},
                        {3, Magasin_crud.Add_Animal},
                        {4, Magasin_crud.Delete_Animal},
                        {5, Magasin_crud.Search_Animals},
                    };
                    Action<Dictionary<string, List<string>>> fonction = choices[user_input];
                    fonction(magasin);
                    /* switch (choice)
                    {
                        case 1:
                            Magasin_crud.DisplayAll_Magasin(magasin);
                            Task.Delay(2000).Wait();
                            Magasin_main();
                            break;
                        case 2:
                            Magasin_crud.AddType_Article(magasin);
                            Task.Delay(2000).Wait();
                            Magasin_main();
                            break;
                        case 3:
                            Magasin_crud.Add_Animal(magasin);
                            Task.Delay(2000).Wait();
                            Magasin_main();
                            break;
                        case 4:
                            Magasin_crud.Delete_Animal(magasin);
                            Task.Delay(2000).Wait();
                            Magasin_main();
                            break;
                        case 5:
                            Magasin_crud.Search_Animals(magasin);
                            break;
                        
                        default:
                            Console.WriteLine("Choix invalide");
                            choice_select();
                            break;
                    } */

                }
            
                catch (FormatException)
                {
                    Console.WriteLine("Entrez un <nombre> valide");
                    choice_select();
                }


            }

        }
    }
}