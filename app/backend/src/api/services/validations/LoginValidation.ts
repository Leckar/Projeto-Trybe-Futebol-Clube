import { LoginCredentials } from '../../../types';
// import { emailSchema, passwordSchema } from './schemas/LoginSchemas';

const loginValidation = (dto: LoginCredentials) => {
  const { email, password } = dto;
  // try {
  //   emailSchema.validate(email);
  //   passwordSchema.validate(password);
  //   return true;
  // } catch (error) {
  //   return false;
  // }
  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/; // REGEX compartilhado pelo aluno Marcello Santoro da turma 25 tribo A
  const test = regex.test(email);
  if (test && password.length >= 6) return true;
  return false;
};

export default loginValidation;
