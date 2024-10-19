import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/modules/user/domain/repository/user.repository';
import { UserOutputDTO } from '../../dto/user-output.dto';
import { UserEmailNotFoundException } from 'src/modules/user/domain/exceptions/user-exceptions';

type UserOutputDTOWithPassword = UserOutputDTO & { password: string };

@Injectable()
export class FindUserByEmailUseCase {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async execute(email: string): Promise<UserOutputDTO> {
    const userFound = await this.userRepository.findByEmail(email);

    if (!userFound) {
      throw new UserEmailNotFoundException(email);
    }

    return userFound.toJSON();
  }

  async executeWithPassword(email: string): Promise<UserOutputDTOWithPassword> {
    const userFound = await this.userRepository.findByEmail(email);

    if (!userFound) {
      throw new UserEmailNotFoundException(email);
    }

    return {
      ...userFound.toJSON(),
      password: userFound.password,
    };
  }
}
