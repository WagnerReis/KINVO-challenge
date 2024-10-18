import IValidator from 'src/@shared/validator/validator.interface';
import { User } from '../entity/user.entity';
import * as yup from 'yup';

export default class UserValidator implements IValidator<User> {
  validate(entity: User): void {
    try {
      yup
        .object()
        .shape({
          name: yup.string().required('Name is required'),
          email: yup
            .string()
            .email('Please enter a valid email address')
            .required('Email is required'),
          password: yup
            .string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Password is required'),
        })
        .validateSync(
          {
            name: entity.name,
            email: entity.email,
            password: entity.password,
          },
          {
            abortEarly: false,
          },
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: 'user',
          message: error,
        });
      });
    }
  }
}
