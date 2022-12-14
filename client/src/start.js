import { createRoot } from "react-dom/client";
import Shelf from "./components/main/Shelf";

const root = createRoot(document.querySelector("main"));
root.render(<Shelf />);
