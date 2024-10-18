import { HttpException, HttpStatus } from '@nestjs/common';
import { UserDTO } from 'user/application/dto/create-user.dto';
import { UserFactory } from 'user/domain/factories/user.factory';
import { IUserRepository } from 'user/domain/repository/user.repository';
import * as bcrypt from 'bcrypt';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(user: UserDTO) {
    const userAlreadExists = await this.userRepository.findByEmail(user.email);

    if (userAlreadExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const newUser = UserFactory.createNew(user);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(newUser.password, saltOrRounds);

    return await this.userRepository.create({
      name: newUser.name,
      email: newUser.email,
      password: hash,
    });
  }
}
