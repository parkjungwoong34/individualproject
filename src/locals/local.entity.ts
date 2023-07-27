import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { localStatus } from "./local-status.enum";

@Entity()
export class Local extends BaseEntity { 
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title: string

  @Column()
  description: string;

  @Column()
  status: localStatus;

}