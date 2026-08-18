export default () => ({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});
