import { Injectable } from '@nestjs/common';
import { FindUserByEmailUseCase } from '../find-by-email/find-user-by-email.usecase';
import { IUserRepository } from 'src/modules/user/domain/repository/user.repository';
import { IPasswordService } from 'src/modules/user/domain/services/password-service.interface';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { UserOutputDTO } from '../../dto/user-output.dto';
import { UserFactory } from 'src/modules/user/domain/factories/user.factory';
import { UserAlreadyExistsException } from 'src/modules/user/domain/exceptions/user-exceptions';

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
