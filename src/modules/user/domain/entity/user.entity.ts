import EntityBase from 'src/@shared/entity/entity';
import UserValidator from '../validator/user.validator';
import NotificationError from 'src/@shared/notification/notification.error';

type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class User extends EntityBase {
  private _name: string;
  private _email: string;
  private _password: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(userProps: UserProps) {
    super(userProps?.id);
    this._name = userProps.name;
    this._email = userProps.email;
    this._password = userProps.password;
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();

    this.validate();

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  private validate() {
    new UserValidator().validate(this);
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
