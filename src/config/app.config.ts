export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  environment: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'TilecraftInteriors',
  apiPrefix: process.env.API_PREFIX || 'api/v1',
  uploadDir: process.env.UPLOAD_DIR || './uploads',
});
