import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserUseCase } from '../usecases/create/create-user.usecase';
import { UserAlreadyExistsException } from 'user/domain/exceptions/user-exceptions';
import { CreateUserDTO, CreateUserOutputDTO } from '../dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDTO,
  ): Promise<CreateUserOutputDTO> {
    try {
      const user = await this.createUserUseCase.execute(createUserDto);
      return user;
    } catch (error) {
      if (error instanceof UserAlreadyExistsException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw error;
    }
  }
}
