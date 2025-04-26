import { StrictMode } from "react";
import "./App.css";
import Sidebar from "./presentation/components/Sidebar";
import Container from "./presentation/pages/Container";

function App({ children }) {
  return (
    <StrictMode>
      <Container>
        <Sidebar />
        {children}
      </Container>
    </StrictMode>
  );
}

export default App;
