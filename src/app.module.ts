import { Module } from '@nestjs/common';
import { LocalsModule } from './boards/locals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/tpyeorm.config';

@Module({
  imports: [  
    TypeOrmModule.forRoot(TypeORMConfig),
    LocalsModule
  ],
})
export class AppModule {}
