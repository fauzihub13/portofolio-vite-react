import { motion } from "motion/react";
import { StrictMode } from "react";
import "./App.css";
import NavBar from "./presentation/components/NavBar";
import Sidebar from "./presentation/components/Sidebar";
import Container from "./presentation/pages/Container";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function App({ children }) {
  return (
    <StrictMode>
      <Container>
        <Sidebar />
        <div className="flex flex-col lg:w-3/4 gap-4 ">
          <NavBar />
          <motion.div initial="initial" animate="animate" variants={variants}>
            {children}
          </motion.div>
        </div>
      </Container>
    </StrictMode>
  );
}

export default App;
