import { Status } from "./Status";
import { User } from "./User";

export class Task{
    id: number;
    title: string;
    content?: string | null;
    status: Status;
    author: User;
    authorId: number;
    media?: string | null
}

export class TaskCreate{
    title: string;
    content?: string | null;
    authorId: number;
}

export class TaskUpdate{
    id: number;
    title: string;
    content?: string | null;
    status: Status;
    authorId: number;
}