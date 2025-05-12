export const env = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || 'development',
  postgresUri: process.env.DB_URI || 'postgres://postgres:postgresql@localhost:5432/mydb',
  jwtSecret: process.env.JWT_SECRET || 'my_secret',
  jwtexpiresIn: process.env.JWT_EXPIRES_IN || '7d',
};
