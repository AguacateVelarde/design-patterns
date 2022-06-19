export interface Post {
    title: string;
    content: string;
    createdDate: string;
    author: string;
    id: string;
}

export interface IDatabaseAbstract {
    getAllPost(): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
}