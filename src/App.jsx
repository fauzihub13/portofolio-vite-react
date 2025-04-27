import { StrictMode } from "react";
import "./App.css";
import Sidebar from "./presentation/components/Sidebar";
import Container from "./presentation/pages/Container";
import NavBar from "./presentation/components/NavBar";

function App({ children }) {
  return (
    <StrictMode>
      <Container>
        <Sidebar />
        <div className="flex flex-col lg:w-3/4 gap-4 ">
          <NavBar/>
          {children}
        </div>
      </Container>
    </StrictMode>
  );
}

export default App;
