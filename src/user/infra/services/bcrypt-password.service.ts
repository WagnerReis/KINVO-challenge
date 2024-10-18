import { IPasswordService } from 'user/domain/services/password-service.interface';
import * as bcrypt from 'bcrypt';

export class BcryptPasswordService implements IPasswordService {
  private saltOrRounds = 10;

  async hash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, this.saltOrRounds);
    return hash;
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hash);
    return match;
  }
}
