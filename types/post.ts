export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    createdAt: Date;
    category: string;
    readTime: number;
}