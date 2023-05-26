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
app.get("/todo", function (req, res) {
    const styles = {
        header: { color: "grey", backgroundColor: "black" },
    };
    const s = `<h2 style="background-color: black">hello</h2>`;
    const t = server_1.default.renderToString(react_1.default.createElement("h2", { style: styles.header }, "hello"));
    res.send(t);
});
app.get("*", (req, res) => {
    res.redirect("/todo");
});
app.set("x-powered-by", "gws");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
