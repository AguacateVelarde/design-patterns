class Connection {
    query = () => {
        return 'Here return some incredible data'; 
    }
}

export class Database {
    static connection: Connection; 

    connect = () => {
        if(Database.connection) {
          return Database.connection;   
        }

        Database.connection = new Connection(); 

        return Database.connection; 
    }
}