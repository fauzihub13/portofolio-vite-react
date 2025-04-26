import { StrictMode } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <StrictMode>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-12 bg-red font-poppins">
        <div className="flex flex-col lg:flex-row gap-5 mx-auto">
          <Sidebar />
          <Content />
        </div>
      </div>
    </StrictMode>
  );
}

export default App;
