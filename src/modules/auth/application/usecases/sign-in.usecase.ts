import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/modules/user/domain/repository/user.repository';
import { IPasswordService } from 'src/modules/user/domain/services/password-service.interface';

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
    private readonly bcryptService: IPasswordService,
  ) {}

  async execute(email: string, pass: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);

    const matchPassword = await this.bcryptService.compare(pass, user.password);

    if (!matchPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      user: {
        ...user.toJSON(),
      },
    };

    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
