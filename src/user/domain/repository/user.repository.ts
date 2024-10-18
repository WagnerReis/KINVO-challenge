import { User } from '../entity/user.entity';

export default abstract class IUserRepository {
  abstract create(entity: User): Promise<User>;
  abstract update(entity: User): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findAll(): Promise<User[]>;
}
