import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shelf from "./components/main/Shelf";
import InsideTheBook from "./components/main/InsideTheBook";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Shelf />}></Route>
                <Route
                    exact
                    path="/book/:id"
                    element={<InsideTheBook />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = createRoot(document.querySelector("main"));
root.render(<App />);
