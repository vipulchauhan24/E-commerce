module.exports = {
    HOST: "db",
    // HOST: "localhost",
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
// /home/vipul/projects/E-commerce/Database/e_comm.sql