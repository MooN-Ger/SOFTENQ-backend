module.exports = {
  development: {
    host: 'localhost',
    dialect: 'postgres', 
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};
