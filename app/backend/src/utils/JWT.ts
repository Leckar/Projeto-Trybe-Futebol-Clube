// import jwt from 'jsonwebtoken';
// import { Payload } from '../api/types';

// const SECRET = process.env.JWT_SECRET as string;

// const tokenGenerator = (payload: Payload): string => {
//   const token = jwt.sign(
//     payload,
//     SECRET,
//     {
//       algorithm: 'HS256',
//       expiresIn: '1d',
//     },
//   );
//   return token;
// };

// const tokenValidator = (token: string): Payload => {
//   const payload = jwt.verify(token, SECRET);
//   return payload as Payload;
// };

// export = {
//   tokenGenerator,
//   tokenValidator,
// };
