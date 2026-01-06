import { useState } from "react";
import { Button } from "./components/atoms/Button";
import { Checkbox } from "./components/atoms/Checkbox";
import { Trash2 } from "lucide-react";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <div className="min-h-screen bg-red-200 text-black flex flex-col items-center justify-center gap-6">
      <h1>Hello, World!</h1>
      <Checkbox checked={hide} onChange={(val) => setHide(val)} />
      {hide && (
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      )}

      <div className="flex gap-3 items-center mt-4">
        <Button>Add</Button>

        <Button variant="icon" ariaLabel="Delete task">
          <Trash2 size={16} />
        </Button>

        <div className="flex gap-2 bg-white p-3 rounded-lg shadow">
          <Button variant="rounded" ariaLabel="All tasks" active>
            All
          </Button>
          <Button variant="rounded" ariaLabel="Active tasks">
            Active
          </Button>
          <Button variant="rounded" ariaLabel="Completed tasks">
            Completed
          </Button>
        </div>
        <Card/>
      </div>
    </div>
  );
}

export default App;
