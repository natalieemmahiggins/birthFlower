import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let birthMonth;
app.use(getInputtedMonth);

function getInputtedMonth(req,res,next){
    const birthday = req.body["birthday"];
    const inputtedDate = new Date(birthday);
    birthMonth = inputtedDate.getMonth();
    next();
}

app.post("/result", (req, res)=>{
res.send("birth month is "+birthMonth);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
