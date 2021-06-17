module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "3pBVD9h448",
    password: process.env.MYSQL_PASS || "XaZswYwkry",
    database: process.env.MYSQL_DB || "3pBVD9h448",
  },
  mysql_service: {
    host: process.env.MYSQL_SERVICE_HOST || 'localhost',
    port: process.env.MYSQL_SERVICE_PORT || 3001,    
  },
};
