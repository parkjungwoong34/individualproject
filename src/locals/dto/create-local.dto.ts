import { IsNotEmpty } from "class-validator";

export class CreateLocalDto{
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;  
}