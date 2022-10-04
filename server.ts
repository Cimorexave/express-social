//modules
//express
import * as express from "express";
const app = express()();
//cors
import cors from "cors";
//middleware
app.use(cors());
//parsing json req
app.use(express.json());
//Running server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port: ${process.env.SERVER_PORT}`)
});