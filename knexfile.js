module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // Needed with SQLite3
    connection: {
      filename: './data/recipes.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_key = ON', done) // Foreign key enforcement
        // only needed for SQLite3
      }
    }
  }
};
