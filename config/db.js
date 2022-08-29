import mysql from "serverless-mysql";

const pool = mysql({
  // config: {
  //   host: "localhost",
  //   user: "",
  //   password: "",
  //   port: 3306,
  //   database: "",
  // },

  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 3306,
    database: process.env.DB_DATA,
  },
});

export { pool };
