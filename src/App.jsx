import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainLayout from "./component/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return <MainLayout />;
}

export default App;
