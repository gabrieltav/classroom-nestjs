module.exports = {
    type: process.env.TYPEORM_TYPE || 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: [__dirname + '/../migration/**/*.{js,ts}'],
    entities: [__dirname + '/../../dist/**/**/**/*.entity.js'],
    seeds: [__dirname + '/../../dist/src/database/seeds/*.{js,ts}'],
    factories: [__dirname + '/../../database/factories/*.js'],
    synchronize: true,
    cli: {
      migrationsDir: 'migration',
    },
  };
  