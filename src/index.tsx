import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import Calculator from "./calculator";

ReactDOM.render(<Calculator />, document.getElementById("root"));
serviceWorker.unregister();
