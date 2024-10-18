import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../domain/entity/user.entity';
import { User as UserModel, UserDocument } from './schemas/user.schema';
import { IUserRepository } from 'user/domain/repository/user.repository';
import { UserFactory } from 'user/domain/factories/user.factory';
import { UserDTO } from 'user/application/dto/create-user.dto';

@Injectable()
export class MongoUserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
  ) {}
  async update(user: User): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(user.id, { ...user }, { new: true })
      .exec();

    return UserFactory.createFromPersistence(this.toPlainObject(updatedUser));
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) =>
      UserFactory.createFromPersistence(this.toPlainObject(user)),
    );
  }

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    const savedUser = await createdUser.save();
    return UserFactory.createFromPersistence(this.toPlainObject(savedUser));
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id).exec();
    return user
      ? UserFactory.createFromPersistence(this.toPlainObject(user))
      : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email }).exec();
    return user
      ? UserFactory.createFromPersistence(this.toPlainObject(user))
      : null;
  }

  private toPlainObject(document: UserDocument): UserDTO {
    const { id, name, email, password } = document;
    return { id, name, email, password };
  }
}
