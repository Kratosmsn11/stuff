import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const app = express();
const port: number = 3000;

app.get("/todo", function (req, res) {
  const styles = {
    header: { color: "grey", backgroundColor: "black" },
  };
  const s = `<h2 style="background-color: black">hello</h2>`;
  const t = ReactDOMServer.renderToString(<h2 style={styles.header}>hello</h2>);
  res.send(t);
});

app.get("*", (req, res) => {
  res.redirect("/todo");
});

app.disable("x-powered-by");// set for gws

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
