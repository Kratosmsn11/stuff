import React from "react";
import ReactDOMClient from "react-dom/client";

function Board() {
  return (
    <div>
      <div>
        <div style={{ display: "inline", padding: "100px" }}>X</div>
        <div style={{ display: "inline" }}>O</div>
        <div style={{ display: "inline" }}>X</div>
      </div>
      <div>
        <div style={{ display: "inline" }}>X</div>
        <div style={{ display: "inline" }}>O</div>
        <div style={{ display: "inline" }}>X</div>
      </div>
      <div>
        <div style={{ display: "inline" }}>X</div>
        <div style={{ display: "inline" }}>O</div>
        <div style={{ display: "inline" }}>X</div>
      </div>
    </div>
  );
}

function main() {
  //remember the exclaimation mark
  const rootDiv = document.getElementById("root")!;

  // if (rootDiv) {
  //   rootDiv.innerText = "hehehehe";
  // }

  // this will get rid on the error as we are not importing from the node modules
  const rootElement = ReactDOMClient.createRoot(rootDiv);
  rootElement.render(<Board />);
}

window.addEventListener("load", main, { once: true });
