import { Injectable } from '@nestjs/common';
import { UserDTO, UserOutput } from 'user/application/dto/create-user.dto';
import { UserFactory } from 'user/domain/factories/user.factory';
import { IUserRepository } from 'user/domain/repository/user.repository';
import { UserAlreadyExistsException } from 'user/domain/exceptions/user-exceptions';
import { IPasswordService } from 'user/domain/services/password-service.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private passwordService: IPasswordService,
  ) {}

  async execute(user: UserDTO): Promise<UserOutput> {
    await this.ensureUserDoesNotExists(user.email);

    const hash = await this.passwordService.hash(user.password);

    const newUser = UserFactory.createNew(user);

    const savedUser = await this.userRepository.create({
      name: newUser.name,
      email: newUser.email,
      password: hash,
    });

    return {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };
  }

  private async ensureUserDoesNotExists(
    email: string,
  ): Promise<void | UserAlreadyExistsException> {
    const userAlreadExists = await this.userRepository.findByEmail(email);

    if (userAlreadExists) {
      throw new UserAlreadyExistsException(email);
    }
  }
}
