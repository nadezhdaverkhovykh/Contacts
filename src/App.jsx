import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wrapper />
    </>
  );
}

export default App;
