import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.tsx";
import { PregaoProvider } from "./contexts/PregaoContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PregaoProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </PregaoProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
