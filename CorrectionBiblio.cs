using System;
using System.Collections;

bool ChoixEstValide(string choix)
{
    List<string> choixValides = new List<string> { "1", "2", "3", "4", "5", "6" };

    if (int.TryParse(choix, out int choixInt) == false)
    {
        return false;
    }

    return choixValides.Contains(choix);
}

bool InputEstValide(string input, out string message_erreur)
{
    List<bool> conditions = new List<bool>
    {
        string.IsNullOrWhiteSpace(input),
        input.Contains("/"),
        input.Contains("*"),
        input.Contains("."),
        input.Length < 2,
        input.Length > 10,
    };

    List<string> messages = new List<string>
    {
        "La reponse ne peut pas etre vide",
        "La reponse ne peut pas contenir de /",
        "La reponse ne peut pas contenir de *",
        "La reponse ne peut pas contenir de .",
        "La reponse doit contenir au moins 2 caracteres",
        "La reponse doit contenir au maximum 10 caracteres",
    };

    if (conditions.Contains(true))
    {
        message_erreur = messages[conditions.IndexOf(true)];
        return false;
    }
    message_erreur = "";
    return true;
}

string DemanderAuteurExistant(Dictionary<string, List<string>> Bibliotheque)
{
    string auteur = "";
    while (true)
    {
        auteur = DemanderALUtilisateurSecuriser("Entrez l'auteur du livre : ");
        if (Bibliotheque.ContainsKey(auteur))
        {
            break;
        }
        System.Console.WriteLine("L'auteur n'existe pas");
    }

    return auteur;
}
string DemanderTitreExistant(List<string> ListeDesLivres)
{
    string Titre = "";
    while (true)
    {
        Titre = DemanderALUtilisateurSecuriser("Entrez le Titre du livre : ");
        if (ListeDesLivres.Contains(Titre))
        {
            break;
        }
        System.Console.WriteLine("Le Titre n'existe pas");
    }

    return Titre;
}

int DemanderALUtilisateurEntierSecuriser(string message)
{
    string input_string = "";
    while (true)
    {
        System.Console.WriteLine(message);
        input_string = Console.ReadLine();

        if (ChoixEstValide(input_string))
        {
            break;
        }
        System.Console.WriteLine("La reponse doit etre un nombre entier");
    }

    return int.Parse(input_string);
}

string DemanderALUtilisateurSecuriser(string message)
{
    string input = "";
    while (true)
    {
        System.Console.WriteLine(message);
        input = Console.ReadLine();

        if (InputEstValide(input, out string message_erreur))
        {
            break;
        }
        System.Console.WriteLine(message_erreur);
    }

    return input;
}

string DemanderAuteur()
{
    return DemanderALUtilisateurSecuriser("Entrez l'auteur du livre : ");
}

string DemanderTitre()
{
    return DemanderALUtilisateurSecuriser("Entrez le titre du livre : ");
}

void RoutineAjoutLivre(Dictionary<string, List<string>> Bibliotheque)
{
    string auteur = DemanderAuteurExistant(Bibliotheque);

    string titre = DemanderTitre();

    Bibliotheque[auteur].Add(titre);
}

void RoutineSuppressionLivre(Dictionary<string, List<string>> Bibliotheque)
{
    string auteur = DemanderAuteurExistant(Bibliotheque);

    string titre = DemanderTitreExistant(Bibliotheque[auteur]);

    Bibliotheque[auteur].Remove(titre);
}
void RoutineAffichageToutLivres(Dictionary<string, List<string>> Bibliotheque)
{
    foreach (var auteur in Bibliotheque)
    {
        System.Console.WriteLine(auteur.Key);
        foreach (var titre in auteur.Value)
        {
            System.Console.WriteLine($"\t{titre}");
        }
    }
}
void RoutineAjoutAuteur(Dictionary<string, List<string>> Bibliotheque)
{
    string auteur = DemanderAuteur();
    Bibliotheque.Add(auteur, new List<string>());
}

void RoutineRechercheAffichageLivre(Dictionary<string, List<string>> Bibliotheque)
{
    string titre = DemanderALUtilisateurSecuriser("Entrez le titre du livre : ");

    foreach (var PairAuteurLivre in Bibliotheque)
    {
        List<string> ListeDesLivres = PairAuteurLivre.Value;
        if (ListeDesLivres.Contains(titre))
        {
            System.Console.WriteLine($"{PairAuteurLivre.Key} : {titre}");
            return;
        }
    }

    System.Console.WriteLine("Le livre n'existe pas");
}

void RoutineQuit(Dictionary<string, List<string>> Bibliotheque)
{
    Environment.Exit(0);
}

void AfficherMenuPrincipal()
{
    System.Console.WriteLine("1 - Ajouter un livre");
    System.Console.WriteLine("2 - Supprimer un livre");
    System.Console.WriteLine("3 - Afficher tous les livres");
    System.Console.WriteLine("4 - Ajouter un auteur");
    System.Console.WriteLine("5 - Rechercher un livre");
    System.Console.WriteLine("6 - Quitter");
}

void ChoixUtilisateur(Dictionary<string, List<string>> Bibliotheque)
{
    AfficherMenuPrincipal();
    int choix = DemanderALUtilisateurEntierSecuriser("Entrez votre choix : ");
    Dictionary<int, Action<Dictionary<string, List<string>>>> routines =
        new()
        {
            { 1, RoutineAjoutLivre },
            { 2, RoutineSuppressionLivre },
            { 3, RoutineAffichageToutLivres },
            { 4, RoutineAjoutAuteur },
            { 5, RoutineRechercheAffichageLivre },
            { 6, RoutineQuit },
        };

    Action<Dictionary<string, List<string>>> fonction = routines[choix];

    fonction(Bibliotheque);
}

void ProgrammePrincipal()
{
    Dictionary<string, List<string>> Bibliotheque =
        new()
        {
            {
                "Tolkien",
                new List<string> { "Le seigneur des anneaux", "Le Hobbit" }
            },
            {
                "Hugo",
                new List<string> { "Les miserables", "Notre dame de Paris" }
            }
        };

    while (true)
    {
        ChoixUtilisateur(Bibliotheque);
    }
}

ProgrammePrincipal();
