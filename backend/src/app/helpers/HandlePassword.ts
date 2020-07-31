import bcrypt from 'bcryptjs';

export default class HandlePassword {
  async hashPassword(password: string, bytes: number) {
    return bcrypt.hash(password, bytes);
  }
}
