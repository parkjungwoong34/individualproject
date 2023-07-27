import { Injectable, NotFoundException } from '@nestjs/common';
import { localStatus } from './local-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateLocalDto } from './dto/create-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalRepository } from './local.repository';
import { Local } from './local.entity';

@Injectable()
export class LocalsService {
  constructor(
    @InjectRepository(LocalRepository)
    private localRepository: LocalRepository,
  ) {}

    createBoard(createLocalDto: CreateLocalDto): Promise<Local> {
      return this.localRepository.createBoard(createLocalDto); 

    }


    async getBoardById(id: number): Promise <Local> {
      const found = await this.localRepository.findOne(id);

      if(!found) {
        throw new NotFoundException('Cant find Board with id ${id}');
      }
      
      return found;
    }

    async deleteBoard(id: number): Promise<void> {
      const result = await this.localRepository.delete({id});

      if (result.affected === 0) {
          throw new NotFoundException(`Can't find Board with id ${id}`)
      }
  }

  async updateBoardStatus(id: number, status: localStatus): Promise<Local> {
    const local = await this.getBoardById(id);

    local.status = status;
    await this.localRepository.save(local);

    return local;
}

  }