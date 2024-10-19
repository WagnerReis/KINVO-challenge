import * as bcrypt from 'bcrypt';
import { IPasswordService } from '../../domain/services/password-service.interface';

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
