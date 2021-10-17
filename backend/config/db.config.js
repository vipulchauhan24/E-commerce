module.exports = {
    HOST: "127.0.0.1",
    USER: "user",
    PASSWORD: "password",
    DB: "e_comm",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};