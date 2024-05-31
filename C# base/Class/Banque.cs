namespace Banque_Class
{
    public class Banque
    {
        private string _username;
        private int _sold;

        private int _cbCode;

        //constructeur
        public Banque(string name, int age, int cbCode)
        {
            _username = name;
            _sold = age;
            _cbCode = cbCode;
        }
        

        //methode
        public void AddSold()
        {
            Console.WriteLine("Combien voulez-vous ajouter?");
            int user_input = Convert.ToInt32(Console.ReadLine());
            try{
                if (user_input > 0)
                {
                    _sold += user_input;
                    Console.WriteLine("Votre nouveau solde est de " + _sold);
                }
                else
                {
                    Console.WriteLine("Veuillez entrer un nombre positif");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Veuillez entrer un nombre valide");
            }
        } 

        public void removeSold()
        {
            Console.WriteLine("Combien voulez-vous retirer?");
            int user_input = Convert.ToInt32(Console.ReadLine());
            try{
                if (user_input > 0 && user_input > _sold )
                {
                    _sold -= user_input;
                    Console.WriteLine("Votre nouveau solde est de " + _sold);
                }
                else
                {
                    Console.WriteLine("Veuillez entrer un nombre positif");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Veuillez entrer un nombre valide");
            }
        }
        










        //getters et setters
        public string Username
        {
            get { return _username; }
            set { _username = value; }
        }
        
        public int Sold
        {
            get { return _sold; }
            set { _sold = value; }
        }
        
        public int CbCode
        {
            get { return _cbCode; }
            set { _cbCode = value; }
        }
    }

}