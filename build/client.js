"use strict";
// import React from "react";
// import ReactDOMClient from "react-dom/client";
function main() {
    //remember the exclaimation mark
    const rootDiv = document.getElementById("root");
    // if (rootDiv) {
    //   rootDiv.innerText = "hehehehe";
    // }
    //
    // @ts-expect-error
    const rootElement = ReactDOM.createRoot(rootDiv);
    rootElement.render(React.createElement("div", null,
        React.createElement("p", null, " Hello from the CLIENT "),
        React.createElement("p", null, " heheheheheh... "),
        React.createElement("p", null, " evil laugh Mwahaahahahahaha... ")));
}
window.addEventListener("load", main, { once: true });
