import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { LocalsService } from './locals.service';
import { localStatus } from './local-status.enum';
import { CreateLocalDto } from './dto/create-local.dto';
import { localStatusValidationPipe } from './pipes/local-status-validation,pipe';
import { Local } from './local.entity';

@Controller('locals')
export class LocalsController {
  constructor(private localsService: LocalsService) {}

  
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateLocalDto: CreateLocalDto): Promise<Local> {
    return this.localsService.createBoard(CreateLocalDto)
  }

  @Get('/:id')
  getBoardById(@Param('id') id:number) : Promise<Local> {
    return this.localsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id,): Promise<void> {
      return this.localsService.deleteBoard(id);
  }

  @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', localStatusValidationPipe) status: localStatus
    ) {
        return this.localsService.updateBoardStatus(id, status);
    }

}
