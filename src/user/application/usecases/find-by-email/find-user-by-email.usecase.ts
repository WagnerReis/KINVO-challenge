import { Injectable } from '@nestjs/common';
import { UserOutputDTO } from 'user/application/dto/user-output.dto';
import { UserEmailNotFoundException } from 'user/domain/exceptions/user-exceptions';
import { IUserRepository } from 'user/domain/repository/user.repository';

@Injectable()
export class FindUserByEmailUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(email: string): Promise<UserOutputDTO> {
    const userFound = await this.userRepository.findByEmail(email);

    if (!userFound) {
      throw new UserEmailNotFoundException(email);
    }

    return userFound.toJSON();
  }
}
