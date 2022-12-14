import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("main"));
root.render(<HelloWorld />);

function HelloWorld() {
    return <div>Hello, World!</div>;
}
