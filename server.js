import "dotenv/config";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const _dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 4000;
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render(_dirname + "/public/index.ejs");
});

app.post("/game", (req,res)=>{
    res.render(_dirname + "/public/game.ejs");
});

app.listen(port, ()=>{
    console.log(`Listening at port: ${port}`);
});