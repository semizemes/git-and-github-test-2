import express from "express";
import superheroes from "superheroes";
import myPackage from'git-and-github-test-2';
console.log(myPackage);


const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>Behold, I am ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
