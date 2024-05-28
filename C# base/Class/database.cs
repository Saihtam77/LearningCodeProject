using System.Data.SQLite;

namespace Data
{
    class Database
    {

        private SQLiteConnection db;

        public Database()
        {
            db = new SQLiteConnection("Data Source=database.db");
        }

        //get data from animal table
        public void GetAnimal()
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = "SELECT * FROM animal";
            SQLiteDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader["name"]);
            }
            db.Close();
        }

    }


}