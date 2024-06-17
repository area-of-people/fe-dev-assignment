import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { worker } from "./mocks/browser.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start the mocking server when the app is started
worker.start({
  onUnhandledRequest: "bypass",
});
