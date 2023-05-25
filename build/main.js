"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//
app.get("/todo", (req, res) => {
    const s = `<h2 style="background-color: black">hello</h2>`;
    res.send(s);
});
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
