import { NotificationErrorProps } from './notification';

export default class NotifcationError extends Error {
  constructor(public errors: NotificationErrorProps[]) {
    super(
      errors.map((error) => `${error.context}: ${error.message}`).join(','),
    );
  }
}
