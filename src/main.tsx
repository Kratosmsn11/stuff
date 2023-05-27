import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const app = express();
const port: number = 3000;

type Props = { luckyNumber: number };

// use function keyword if it is standalone
function App(props: Props) {
  // TODO: add more styles, hello is centered on the screen (both vertical & horizontal).
  const styles = {
    header: { color: "grey", backgroundColor: "black" },
  };

  return (
    <html>
      <head>
        <title> Web dev </title>
        <script src="/client.js" />
      </head>
      <body>
        <h2 style={styles.header}>
          hello, your lucky number is {props.luckyNumber}
        </h2>
        <div>Loading...</div>
      </body>
    </html>
  );
}

// TODO: Get prettier to format on save.
app.get("/todo", function (req, res) {
  // can use arrow func here

  // TODO: need to be a random int between [8,121]
  const num = Math.floor(Math.random() * 100 + 1);
  const t = ReactDOMServer.renderToStaticMarkup(<App luckyNumber={num} />);
  res.send(t);
});

// TODO: how to make it send content-type to javascript.
app.get("/client.js", (req, res) => {
  res.send(`alert("hello")`);
});

app.get("*", (req, res) => {
  res.redirect("/todo");
});

app.disable("x-powered-by"); // set for gws

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
