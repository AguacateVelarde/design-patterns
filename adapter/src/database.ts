import { IDatabaseAbstract } from "./database-interface";

export class DatabaseClient {
    constructor(private readonly database: IDatabaseAbstract) {}

    getAllPost() {
        return this.database.getAllPost();
    }

    getPost(id: string) {
        return this.database.getPost(id);
    }
}