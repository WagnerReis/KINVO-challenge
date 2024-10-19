import { CreateUserDTO } from '../../application/dto/create-user.dto';
import { User } from '../entity/user.entity';

export abstract class IUserRepository {
  abstract create(user: CreateUserDTO): Promise<User>;
  abstract update(user: CreateUserDTO): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findAll(): Promise<User[]>;
}
