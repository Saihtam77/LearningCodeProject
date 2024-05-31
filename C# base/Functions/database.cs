using System.Data.SQLite;

namespace Data
{
    class Database
    {

        private static SQLiteConnection db = new SQLiteConnection("Data Source=database.db;Version=3;");

        //get data from animal table
        static public void GetAllAnimals()
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = "SELECT * FROM animal";
            SQLiteDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine($"{reader["name"]} {reader["age"]} {reader["type"]}");
            }
            db.Close();
        }
        static public void GetOneAnimal(int id)
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = $"SELECT * FROM animal WHERE id = {id}";
            SQLiteDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine($"{reader["name"]} {reader["age"]}");
            }
            db.Close();
        }

        static public void CreateAnimal(string name, int age, string type)
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = $"INSERT INTO animal (name, age,type) VALUES ('{name}', {age} ,'{type}')";
            command.ExecuteNonQuery();
            db.Close();
        }


        static public void UpdateAnimal(int id, string name)
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = $"UPDATE animal SET name = '{name}' WHERE id = {id}";
            command.ExecuteNonQuery();
            db.Close();
        }

        // Update overloaded methode
        static public void UpdateAnimal(int id, string name, int age, string type)
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = $"UPDATE animal SET name = '{name}', age = {age}, type = '{type}' WHERE id = {id}";
            command.ExecuteNonQuery();
            db.Close();
        }
        static public void UpdateAnimal(int id, string name, int age)
        {
            db.Open();
            SQLiteCommand command = db.CreateCommand();
            command.CommandText = $"UPDATE animal SET name = '{name}', age = {age} WHERE id = {id}";
            command.ExecuteNonQuery();
            db.Close();
        }







    }


}