import { Module } from '@nestjs/common';
import { AuthController } from './application/controllers/auth.controller';
import { SignInUseCase } from './application/usecases/sign-in.usecase';
import { IPasswordService } from '../user/domain/services/password-service.interface';
import { BcryptPasswordService } from '../user/infra/services/bcrypt-password.service';
import { IUserRepository } from '../user/domain/repository/user.repository';
import { MongoUserRepository } from '../user/infra/persistence/mongo-user.repository';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../user/domain/entity/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/infra/persistence/schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/infra/providers/auth.provider';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    SignInUseCase,
    {
      provide: IPasswordService,
      useClass: BcryptPasswordService,
    },
    {
      provide: IUserRepository,
      useClass: MongoUserRepository,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
