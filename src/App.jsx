import { useState } from "react";
import { Button } from "./components/atoms/Button";
import { Checkbox } from "./components/atoms/Checkbox";

function App() {
  const [hide, setHide] = useState(false);
  
  return (
    <div className="h-screen flex items-center justify-center text-black bg-red-200">
      <h1>Hello, World!</h1>
      <Checkbox checked={hide} onChange={(val) => setHide(val)} />
      {hide && (
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      )}
    </div>
  );
}

export default App;
