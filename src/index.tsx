import * as React from "react";
import * as ReactDOM from "react-dom";
import Label from "./components/label";

const ROOT = document.querySelector("#root");
ReactDOM.render(
  <Label
    labelCss={{ color: "red", fontSize: "20px", textAlign: "center" }}
    label="Welcome to React Webpack World"
  />,
  ROOT
);
