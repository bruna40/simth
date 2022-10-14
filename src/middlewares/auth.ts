const auth = {
  secret: String(process.env.JWT_SECRET),
  expires: '15m',
};
  
export default auth;