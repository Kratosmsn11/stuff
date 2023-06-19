import express from "express";
import React from "react";
import fs from "fs";
import ReactDOMServer from "react-dom/server";

const app = express();
const port: number = 3000;

type Props = { luckyNumber: number };

// where is the web server running on my machine ???

// use function keyword if it is standalone
function App(props: Props) {
  // TODO: add more styles, text needs to vertically centered on the screen.
  const styles = {
    body: {
      maxHeight: "100vh",
      color: "white",
      display: "flex",
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    para: {
      background: "red",
      justifyContent: "center",
    },
  };

  return (
    <html>
      <head>
        <title> Web dev </title>
        <script src="/client.js" />
      </head>
      <body style={styles.body}>
        <div id="root">Loading...</div>
      </body>
    </html>
  );
}

app.get("/", function (req, res) {
  // can use arrow func here

  // also can do [8,121]
  const num = Math.floor(Math.random() * 100 + 1);
  const t = ReactDOMServer.renderToStaticMarkup(<App luckyNumber={num} />);
  res.send(t);
});

// TODO: look up correct content-type for javascript & how to make it send content-type to javascript.

// TODO: use promises for the same.
app.get("/client.js", (req, res) => {
  // we have 2 readFile methods async is a bit better.
  fs.readFile("build/client.js", (error, clientCode) => {
    console.log("readFile");
    if (error) {
      // TODO: send a different HTTP status code (ex. 404) rather than 200 OK
      res.send("Couldn't read the client code");
      return;
    }
    res.send(clientCode);
  });

  console.log("bleh....");

  // setTimeout(() => {}, 3000);
});

// app.get("*", (req, res) => {
//   res.redirect("/todo");
// });

app.disable("x-powered-by"); // set for gws

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
