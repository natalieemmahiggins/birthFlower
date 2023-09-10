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

let birthFlower;
app.use(getInputtedMonth);

function getInputtedMonth(req,res,next){
    const birthday = req.body["birthday"];
    const inputtedDate = new Date(birthday);
    const birthMonth = inputtedDate.getMonth();
    switch (birthMonth) {
        case 0:
            birthFlower = "Carnation";
          break;
        case 1:
            birthFlower = "Violet";
          break;
        case 2:
            birthFlower = "Daffodil";
          break;
        case 3:
            birthFlower = "Daisy";
          break;
        case 4:
            birthFlower = "Lily of the Valley";
          break;
        case 5:
            birthFlower = "Rose";
          break;
        case 6:
            birthFlower = "Larkspur";
          break;
        case 7:
            birthFlower = "Gladiolus";
          break;
        case 8:
            birthFlower = "Aster";
          break;
        case 9:
            birthFlower = "Marigold";
          break;
        case 10:
            birthFlower = "Chrysanthemum";
          break;
        case 11:
            birthFlower = "Narcissus";
          break;
    }
    next();
}

app.post("/result", (req, res)=>{
res.send("Your birth flower is "+birthFlower);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
