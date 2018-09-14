import { Comment } from './comment';

export class Post {
    user: string;
    body: string;
    comments: Comment[];
}
