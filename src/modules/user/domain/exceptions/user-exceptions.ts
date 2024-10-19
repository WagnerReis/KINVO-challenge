export class UserAlreadyExistsException extends Error {
  constructor(email: string) {
    super(`User with email ${email} already exists`);
    this.name = 'UserAlreadyExistsException';
  }
}

export class UserEmailNotFoundException extends Error {
  constructor(email: string) {
    super(`User with email ${email} not found`);
    this.name = 'UserEmailNotFoundException';
  }
}
