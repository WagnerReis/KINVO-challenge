import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'user/domain/entity/user.entity';
import { UserSchema } from 'user/infra/persistence/schemas/user.schema';
import { IUserRepository } from 'user/domain/repository/user.repository';
import { MongoUserRepository } from 'user/infra/persistence/mongo-user.repository';
import { BcryptPasswordService } from 'user/infra/services/bcrypt-password.service';
import { IPasswordService } from 'user/domain/services/password-service.interface';
import { CreateUserUseCase } from './usecases/create/create-user.usecase';

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
  ],
})
export class UserModule {}
