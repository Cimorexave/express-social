import "dotenv/config";
const dbPassword = process.env.DATABASE_PASSWORD;
const serverPort = process.env.SERVER_PORT;
export {dbPassword, serverPort};