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
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
        },
    };
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, " Web dev "),
            react_1.default.createElement("script", { src: "/client.js" })),
        react_1.default.createElement("body", { style: styles.body },
            react_1.default.createElement("p", { style: {
                    background: "red",
                    justifyContent: "center",
                } },
                "hello, your lucky number is ",
                props.luckyNumber),
            react_1.default.createElement("div", null, "Loading..."))));
}
app.get("/todo", function (req, res) {
    // can use arrow func here
    // also can do [8,121]
    const num = Math.floor(Math.random() * 100 + 1);
    const t = server_1.default.renderToStaticMarkup(react_1.default.createElement(App, { luckyNumber: num }));
    res.send(t);
});
// TODO: look up correct content-type for javascript & how to make it send content-type to javascript.
app.get("/client.js", (req, res) => {
    // we have 2 readFile methods async is a bit better.
    const s = fs_1.default.readFileSync("src/client.js");
    res.send(s);
});
app.get("*", (req, res) => {
    res.redirect("/todo");
});
app.disable("x-powered-by"); // set for gws
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
