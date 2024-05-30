
using DicoExo;
using MagasinCrud;
namespace Magasin
{
    class MagasinClass
    {
        static Dictionary<string,List<string>> magasin  = DicoClass.Get_Dico();
        public static void Magasin_main()
        {
            Console.WriteLine("Que voulez-vous faire?");
           choice(); 
        }

        static void choice(){
            Console.WriteLine("1. Afficher les articles du magasin");
            Console.WriteLine("2. Ajouter un type d'article");
            /* Animal choice */
            Console.WriteLine("3. Ajouter un animal");
            Console.WriteLine("4. Supprimer un animal");
            Console.WriteLine("5. Voir les animaux");
            Console.WriteLine("6. Rechercher un animal");
            choice_select();

            void choice_select(){
                Console.WriteLine("Entrez votre choix ... :");
                int choice = Convert.ToInt32(Console.ReadLine());
                switch(choice){
                    case 1:
                        Magasin_crud.DisplayAll_Articles(magasin);
                        Task.Delay(2000).Wait();
                        Magasin_main();
                        break;
                    case 2:
                        Magasin_crud.AddType_Article(ref magasin);
                        break;
                    case 3:
                        Magasin_crud.Add_Animal();
                        break;
                    case 4:
                        Magasin_crud.Delete_Animal();
                        break;
                    case 5:
                        Magasin_crud.Display_Animals();
                        break;
                    case 6:
                        Magasin_crud.Search_Animal();
                        break;
                    
                    default:
                        Console.WriteLine("Choix invalide");
                        choice_select();
                        break;
                }
            }
            
        }
    }
}