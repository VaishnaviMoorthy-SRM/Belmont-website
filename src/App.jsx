import { useState } from "react";
import Patient from "./patient/patient";

import NavBar from "./Components/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Patient></Patient>
    </>
  );
}

export default App;
