import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserUseCase } from '../usecases/create/create-user.usecase';
import { CreateUserDTO } from '../dto/create-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserOutputDTO } from '../dto/user-output.dto';
import { FindUserByEmailUseCase } from '../usecases/find-by-email/find-user-by-email.usecase';
import { FindUserByEmailDTO } from '../dto/find-user-by-email.dto';
import {
  UserAlreadyExistsException,
  UserEmailNotFoundException,
} from '../../domain/exceptions/user-exceptions';
import { Public } from 'src/infra/decorators/is-public.decorator';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserOutputDTO,
  })
  @ApiResponse({
    status: 409,
    description: 'User with email ... already exists',
  })
  async create(@Body() createUserDto: CreateUserDTO): Promise<UserOutputDTO> {
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

  @Get()
  @ApiOperation({ summary: 'Get user by email' })
  @ApiQuery({ name: 'email', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully retrieved.',
    type: UserOutputDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'User with email ... not found',
  })
  @ApiBearerAuth()
  async findByEmail(
    @Query() query: FindUserByEmailDTO,
  ): Promise<UserOutputDTO> {
    try {
      const user = await this.findUserByEmailUseCase.execute(query.email);
      return user;
    } catch (error) {
      if (error instanceof UserEmailNotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }
}
