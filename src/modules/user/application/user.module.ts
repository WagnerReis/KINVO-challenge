import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from './usecases/create/create-user.usecase';
import { FindUserByEmailUseCase } from './usecases/find-by-email/find-user-by-email.usecase';
import { MongoUserRepository } from '../infra/persistence/mongo-user.repository';
import { IUserRepository } from '../domain/repository/user.repository';
import { IPasswordService } from '../domain/services/password-service.interface';
import { BcryptPasswordService } from '../infra/services/bcrypt-password.service';
import { User } from '../domain/entity/user.entity';
import { UserSchema } from '../infra/persistence/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: IUserRepository,
      useClass: MongoUserRepository,
    },
    {
      provide: IPasswordService,
      useClass: BcryptPasswordService,
    },
    CreateUserUseCase,
    FindUserByEmailUseCase,
  ],
  exports: [IUserRepository, FindUserByEmailUseCase, MongooseModule],
})
export class UserModule {}
