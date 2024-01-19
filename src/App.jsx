import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("Eu");

  async function greet() {
    setGreetMsg(await invoke("render_component", {}));
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={greet}>true</button>
      <button onClick={() => setGreetMsg("Pedro")}>Eu</button>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
