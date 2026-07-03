import "dotenv/config";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url))

const port =process.env.PORT || 4000;
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(_dirname + "/public/index.html");
});

app.listen(port, ()=>{
    console.log(`Listening at port: ${port}`);
});