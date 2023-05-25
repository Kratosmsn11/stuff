import express from "express";

const app = express();
const port: number = 3000;

//
app.get("/todo", (req, res) => {
  const s = `<h2 style="background-color: black">hello</h2>`;
  res.send(s);
});

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
