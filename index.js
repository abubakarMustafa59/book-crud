import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './router/bookRoute.js'
import cors from "cors"
const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use("/public", express.static("public"));
// app.use("/file", fileRouter);

const connection = mongoose.connection;

connection.once("connected", () => console.log("Connected to DATABASE"))
connection.on("ERROR", () => console.log("Connection Failed"))
mongoose.connect("mongodb+srv://abubakar59132:cn8DS8tVoi3ppUVk@cluster0.wtf40rl.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/book", router);
app.listen(9000)