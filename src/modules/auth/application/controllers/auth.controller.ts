import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInUseCase } from '../usecases/sign-in.usecase';
import { SignInDTO, SignInResponse } from '../dtos/sing-in.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private signinUseCase: SignInUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  @ApiResponse({
    status: 200,
    description: 'User signed in successfully',
    type: SignInResponse,
  })
  signIn(
    @Body() signInDto: SignInDTO,
  ): Promise<SignInResponse | UnauthorizedException> {
    return this.signinUseCase.execute(signInDto.email, signInDto.password);
  }
}
