import { randomUUID } from 'crypto';

export default class EntityBase {
  private _id: string;

  constructor() {
    this._id = randomUUID();
  }

  public get id(): string {
    return this._id;
  }
}
