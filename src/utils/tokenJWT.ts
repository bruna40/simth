import jwt from 'jsonwebtoken';

const secret = 'secret';

export default function tokenJWT(id:number) {
  const token = jwt.sign({ id }, secret, { expiresIn: '15m' });
  return token;
}