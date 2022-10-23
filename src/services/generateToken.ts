import { sign } from 'jsonwebtoken';

interface TokenPayload {
  [id: string]: string | number;
}

const generateToken = (id: TokenPayload): string => {
  const token = sign({ id }, 'secret', {
    expiresIn: '15m',
  });

  return token;
};

export default generateToken;