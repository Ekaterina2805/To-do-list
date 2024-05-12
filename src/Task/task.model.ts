import { $Enums, Prisma } from "@prisma/client";



export class Task implements Prisma.TaskCreateInput{
    id: number;
    title: string;
    content: string;
    status: $Enums.Status;
    authorId: number;  
}


