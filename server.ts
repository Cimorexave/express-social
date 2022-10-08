//modules
//express
import * as express from "express";
const app = express();
//mongodb
import {MongoClient, ServerApiVersion} from "mongodb";
//cors
import * as cors from "cors";
//env variables
import { dbPassword } from "./config";
//routes
import login from "./routes/login";
import mongoose from "mongoose";

//connecting to database
const connectToDatabase = async () => {
  const uri = `mongodb+srv://Cimorexave:<${dbPassword}>@cluster0.0vbfcsc.mongodb.net/?retryWrites=true&w=majority`;
  const connectionResult = await mongoose.connect(uri);
  console.log(connectionResult);
};
connectToDatabase();

//index guide
app.get("/", (req: express.Request, res: express.Response ) => {
  res.json({
    success: "true",
    msg: "visit /login to log in to your account; if you don't have one visit /register to make one."
  })
})
//middleware
app.use(cors());
//parsing json req
app.use(express.json());

app.use(login);




//Running server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port: ${process.env.SERVER_PORT}`)
});