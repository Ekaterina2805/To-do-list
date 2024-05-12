import { $Enums } from "@prisma/client";

export class CreateTaskDto {

    readonly title: string;
  
    readonly content: string;
  
    readonly authorId: number ;
  
  }