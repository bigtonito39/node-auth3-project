// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/usersDB.db3'
    }
  },

  pool:{
    afterCreate: (conn, done) => {
      //runs after a conection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); //turn 
    }
  }

};
