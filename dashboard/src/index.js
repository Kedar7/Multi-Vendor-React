import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from './store/index';
const App = lazy(() => import("./App"));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Suspense>
      <App />
    </Suspense>
    </Provider>
  </BrowserRouter>
);

// Measure performance in your app
reportWebVitals();
