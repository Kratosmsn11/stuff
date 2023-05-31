"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const fs_1 = __importDefault(require("fs"));
const server_1 = __importDefault(require("react-dom/server"));
const app = (0, express_1.default)();
const port = 3000;
// where is the web server running on my machine ???
// use function keyword if it is standalone
function App(props) {
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
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, " Web dev "),
            react_1.default.createElement("script", { src: "https://unpkg.com/react@18.2/umd/react.development.js" }),
            react_1.default.createElement("script", { src: "https://unpkg.com/react-dom@18.2/umd/react-dom.development.js" }),
            react_1.default.createElement("script", { src: "/client.js" })),
        react_1.default.createElement("body", { style: styles.body },
            react_1.default.createElement("p", { style: styles.para },
                "hello, your lucky number is ",
                props.luckyNumber),
            react_1.default.createElement("div", { id: "root" }, "Loading..."))));
}
app.get("/todo", function (req, res) {
    // can use arrow func here
    // also can do [8,121]
    const num = Math.floor(Math.random() * 100 + 1);
    const t = server_1.default.renderToStaticMarkup(react_1.default.createElement(App, { luckyNumber: num }));
    res.send(t);
});
// TODO: look up correct content-type for javascript & how to make it send content-type to javascript.
// TODO: use promises for the same.
app.get("/client.js", (req, res) => {
    // we have 2 readFile methods async is a bit better.
    fs_1.default.readFile("build/client.js", (error, clientCode) => {
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
app.get("*", (req, res) => {
    res.redirect("/todo");
});
app.disable("x-powered-by"); // set for gws
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
