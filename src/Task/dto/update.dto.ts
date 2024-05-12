import { $Enums } from "@prisma/client";

export class UpdateTaskDto {
    readonly id: number;

    readonly title: string;
  
    readonly content: string;
  
    readonly status: $Enums.Status;
  
    readonly authorID: number;
  
  }