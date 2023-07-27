import { Module } from '@nestjs/common';
import { LocalsController } from './locals.controller';
import { LocalsService } from './locals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalRepository } from './local.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LocalRepository])],
  controllers: [LocalsController],
  providers: [LocalsService, LocalRepository],

}) 
export class LocalsModule {}
