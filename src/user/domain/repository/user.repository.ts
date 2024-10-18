import { UserDTO } from 'user/application/dto/create-user.dto';
import { User } from '../entity/user.entity';

export abstract class IUserRepository {
  abstract create(user: UserDTO): Promise<User>;
  abstract update(user: UserDTO): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findAll(): Promise<User[]>;
}
