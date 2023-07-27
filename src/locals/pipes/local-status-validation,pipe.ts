import { PipeTransform, BadRequestException } from "@nestjs/common";
import { localStatus } from "../local-status.enum";

export class localStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    localStatus.PRIVATE,
    localStatus.PUBLIC
  ]
  transform(value: any) {
    value = value.toUpperCase();

    if(!this.isStatusValid(value)){
       throw new BadRequestException('${value} insnt in the status options');
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1 
  }

}