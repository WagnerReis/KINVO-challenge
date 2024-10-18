import {
  UserDTO,
  UserPersistenceDTO,
} from 'user/application/dto/create-user.dto';
import { User } from '../entity/user.entity';

export class UserFactory {
  static createFromPersistence(data: UserPersistenceDTO): User {
    return new User({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  static createNew(user: UserDTO): User {
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
