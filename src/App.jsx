// import { useState } from "react";
import { Button } from "./components/atoms/Button";
import { Checkbox } from "./components/atoms/Checkbox";
import { Trash2 } from "lucide-react";
import { Card } from "./components/atoms/Card";
import { Input } from "./components/atoms/Input";
import { Header } from "./components/molecules/Header";
import { ProgressBar } from "./components/atoms/ProgressBar";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-100 to-[#d1dae9] flex items-center justify-center">
      <div className="w-full max-w-[40%] bg-white h-[500px] rounded-[20px] px-6 py-7 shadow-sm">
        {/* Header */}
        <Header />

        {/* Progress */}
        <div className="mt-2 mb-5">
          <ProgressBar percentage={45} />
        </div>

        {/* Input */}
        <div className="mb-5">
          <Input />
        </div>

        {/* Filters section */}
        <div className="bg-gray-50 rounded-xl px-3 py-2 mb-4">
          <div className="flex gap-2">
            <Button variant="rounded" active>
              All
            </Button>
            <Button variant="rounded">Active</Button>
            <Button variant="rounded">Completed</Button>
          </div>
          <Card />
        </div>

        {/* Task list comes next */}
      </div>
    </div>
  );
}

export default App;
