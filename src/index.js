import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import Appl from "./components/Appl";
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <Route component={Appl} />
  </BrowserRouter>,     
  document.querySelector("#root")
);
serviceWorker.unregister();