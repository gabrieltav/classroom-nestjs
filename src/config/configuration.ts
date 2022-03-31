export default () => ({
    server: {
      port: parseInt(process.env.PORT) || 3000,
      node_env: process.env.NODE_ENV,
    },
  
    database: {
      type: process.env.TYPEORM_TYPE,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrations: [__dirname + '/../migration/**/*.ts'],
      synchronize: true,
    },
    
  });
  