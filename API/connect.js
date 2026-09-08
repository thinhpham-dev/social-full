import mysql from "mysql2";

export const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME || "mydevify_social",
    port: process.env.DB_PORT || "3306"
}) 