import { randomUUID } from 'crypto';
import Notification from '../notification/notification';

export default abstract class EntityBase {
  private readonly _id: string;
  private _notification: Notification;

  constructor(id?: string) {
    this._id = id || randomUUID();
    this._notification = new Notification();
  }

  public get id(): string {
    return this._id;
  }

  public get notification(): Notification {
    return this._notification;
  }
}
