<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/humanity">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
>>>>>>> 41dcf794d50b30e1bb2c30f37dd693db8b254048
