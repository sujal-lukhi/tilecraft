export default () => ({
  secret: process.env.JWT_SECRET || 'tilecraft_super_secret_jwt_key_2026',
  expiresIn: process.env.JWT_EXPIRATION || '7d',
});
