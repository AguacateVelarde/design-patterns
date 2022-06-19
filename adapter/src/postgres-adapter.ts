import { IDatabaseAbstract, Post } from './database-interface';

const getPost = (id ?: string): Post => ({
    author: 'Leonardo Velarde',
    content: 'hi, im content',
    createdDate: '01-02-2002',
    id: id ?? '1',
    title: 'Im an awesome title',
} as Post); 

export class PostgresAdapter implements IDatabaseAbstract {
    private connect() {
        return {
            findAll: () => Promise.resolve([
                getPost(),
                getPost(),
                getPost(),     
            ]),
            findOneByPk: (id: string) => Promise.resolve(getPost(id)),
        };
    }
    getAllPost(): Promise<Post[]> {
        const client = this.connect();
        return client.findAll();
    }
    getPost(id: string): Promise<Post> {
        const client = this.connect();
        return client.findOneByPk(id);
    }

}