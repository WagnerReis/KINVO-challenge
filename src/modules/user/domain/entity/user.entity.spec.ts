import { User } from './user.entity';
import NotificationError from 'src/@shared/notification/notification.error';

describe('User', () => {
  it('should create a valid user', () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const user = new User(userData);

    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
    expect(user.password).toBe(userData.password);
  });

  it('should throw NotificationError with correct message for invalid name', () => {
    const userData = {
      name: '',
      email: 'john@example.com',
      password: 'password123',
    };

    expect(() => new User(userData)).toThrow(NotificationError);
    expect(() => new User(userData)).toThrow('user: Name is required');
  });

  it('should throw NotificationError with correct message for invalid email', () => {
    const userData = {
      name: 'John Doe',
      email: 'invalid-email',
      password: 'password123',
    };

    expect(() => new User(userData)).toThrow(NotificationError);
    expect(() => new User(userData)).toThrow(
      'user: Please enter a valid email address',
    );
  });

  it('should throw NotificationError with correct message for invalid password', () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '12345', // Assuming minimum length is 6
    };

    expect(() => new User(userData)).toThrow(NotificationError);
    expect(() => new User(userData)).toThrow(
      'user: Password must be at least 6 characters long',
    );
  });

  it('should throw NotificationError with multiple error messages for multiple invalid fields', () => {
    const userData = {
      name: '',
      email: 'invalid-email',
      password: '12345',
    };

    expect(() => new User(userData)).toThrow(NotificationError);
    expect(() => new User(userData)).toThrow(
      'user: Name is required,user: Please enter a valid email address,user: Password must be at least 6 characters long',
    );
  });
});
