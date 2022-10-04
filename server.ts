import * as express from "express";
const app = express()();

//Running server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port: ${process.env.SERVER_PORT}`)
})