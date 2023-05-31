// import React from "react";
// import ReactDOMClient from "react-dom/client";

function main() {
  //remember the exclaimation mark
  const rootDiv = document.getElementById("root")!;

  // if (rootDiv) {
  //   rootDiv.innerText = "hehehehe";
  // }

  // this will get rid on the error as we are not importing from the node modules
  // @ts-expect-error
  const rootElement = ReactDOM.createRoot(rootDiv);
  rootElement.render(
    <div>
      <p> Hello from the CLIENT </p>
      <p> heheheheheh... </p>
      <p> evil laugh Mwahaahahahahaha... </p>
    </div>
  );
}

window.addEventListener("load", main, { once: true });
