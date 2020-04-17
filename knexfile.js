// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    useNullAsDefault:true,
    migratons: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
     //need to ensure foreign key restrictions work
     pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);//turns on the foreign key enforcement
      }
    }
  }
};
