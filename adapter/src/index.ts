import { DatabaseClient } from "./database";
import { PostgresAdapter } from "./postgres-adapter";

async function main() {
    const adapter = new PostgresAdapter();
    const client = new DatabaseClient(adapter);
    const posts = await client.getAllPost();
    const post = await client.getPost('123');

    console.table(posts);
    console.log(post);
}

main();