import { Task } from "./Task";

export class User{
    id: number;
    email: string;
    name: string;
    task: Task[]
}

export class UserCreate{
    email: string;
    password: string;
    name: string;
}

export class UserUpdate {
    id: number;
    email: string;
    password: string;
    name: string;
}