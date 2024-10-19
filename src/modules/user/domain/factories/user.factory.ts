import {
  CreateUserDTO,
  CreateUserPersistenceDTO,
} from '../../application/dto/create-user.dto';
import { User } from '../entity/user.entity';

export class UserFactory {
  static createFromPersistence(data: CreateUserPersistenceDTO): User {
    return new User({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  static createNew(user: CreateUserDTO): User {
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
