"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const app = (0, express_1.default)();
const port = 3000;
// use function keyword if it is standalone
function App(props) {
    // TODO: add more styles, hello is centered on the screen (both vertical & horizontal).
    const styles = {
        body: { color: "white", backgroundColor: "black", alignItems: "center" },
    };
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, " Web dev "),
            react_1.default.createElement("script", { src: "/client.js" })),
        react_1.default.createElement("body", { style: styles.body },
            react_1.default.createElement("p", null,
                "hello, your lucky number is ",
                props.luckyNumber),
            react_1.default.createElement("div", null, "Loading..."))));
}
// TODO: Get prettier to format on save.
app.get("/todo", function (req, res) {
    // can use arrow func here
    // TODO: need to be a random int between [8,121]
    const num = Math.floor(Math.random() * 100 + 1);
    const t = server_1.default.renderToStaticMarkup(react_1.default.createElement(App, { luckyNumber: num }));
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
