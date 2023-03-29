import { LoginCredentials } from '../../../types';
import { emailSchema, passwordSchema } from './schemas/LoginSchemas';

const loginValidation = (dto: LoginCredentials) => {
  const { email, password } = dto;
  try {
    emailSchema.validate(email);
    passwordSchema.validate(password);
    return true;
  } catch (error) {
    return false;
  }
};

export default loginValidation;
