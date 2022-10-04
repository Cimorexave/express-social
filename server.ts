//modules
//express
import * as express from "express";
const app = express();
//mongodb
import {MongoClient, ServerApiVersion} from "mongodb";
//cors
import cors from "cors";
//env variables
import { dbPassword } from "config";
//routes
import login from "./routes/login";

//connecting to database
const uri = `mongodb+srv://Cimorexave:<${dbPassword}>@cluster0.0vbfcsc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//middleware
app.use(cors());
//parsing json req
app.use(express.json());

app.use(login);




//Running server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port: ${process.env.SERVER_PORT}`)
});