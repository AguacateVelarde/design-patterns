import { Database } from './database';

function main() {
    const database = new Database(); 

    const connection = database.connect();
    const secondConnection = database.connect();

    console.log(connection.query()); 
    console.log(secondConnection.query()); 

    console.log('Is the same connection?', secondConnection === connection); 
}

main()