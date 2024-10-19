import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'user/application/dto/create-user.dto';
import { UserFactory } from 'user/domain/factories/user.factory';
import { IUserRepository } from 'user/domain/repository/user.repository';
import { UserAlreadyExistsException } from 'user/domain/exceptions/user-exceptions';
import { IPasswordService } from 'user/domain/services/password-service.interface';
import { UserOutputDTO } from 'user/application/dto/user-output.dto';
import { FindUserByEmailUseCase } from '../find-by-email/find-user-by-email.usecase';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private passwordService: IPasswordService,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}

  async execute(user: CreateUserDTO): Promise<UserOutputDTO> {
    await this.ensureUserDoesNotExists(user.email);

    const hash = await this.passwordService.hash(user.password);

    const newUser = UserFactory.createNew(user);

    const savedUser = await this.userRepository.create({
      name: newUser.name,
      email: newUser.email,
      password: hash,
    });

    return savedUser.toJSON();
  }

  private async ensureUserDoesNotExists(
    email: string,
  ): Promise<void | UserAlreadyExistsException> {
    const userAlreadExists = await this.findUserByEmailUseCase.execute(email);

    if (userAlreadExists) {
      throw new UserAlreadyExistsException(email);
    }
  }
}
