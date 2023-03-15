import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import VowelCounter from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <VowelCounter />
  </StrictMode>
);
