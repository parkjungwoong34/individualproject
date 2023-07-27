import { EntityRepository, Repository } from "typeorm";
import { localStatus } from "./local-status.enum";
import { Local } from "./local.entity";
import { CreateLocalDto } from "./dto/create-local.dto";

@EntityRepository(Local)
export class LocalRepository extends Repository<Local> {

    async createBoard(createBoardDto: CreateLocalDto) : Promise<Local> {
        const {title, description} = createBoardDto;

        const board = this.create({ 
            title, 
            description,
            status: localStatus.PUBLIC,
            
        })

        await this.save(Local);
        return board;
    }
}