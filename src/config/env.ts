export const env = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri:
    process.env.DB_URI ||
    'mongodb+srv://user:user123@cluster0.uogjtlx.mongodb.net/nestjs',
  jwtSecret: process.env.JWT_SECRET || 'my_secret',
  jwtexpiresIn: process.env.JWT_EXPIRES_IN || '7d',
};
