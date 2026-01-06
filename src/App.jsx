// import { useState } from "react";
import { Button } from "./components/atoms/Button";
import { Checkbox } from "./components/atoms/Checkbox";
import { Trash2 } from "lucide-react";
import { Card } from "./components/atoms/Card";
import { Input } from "./components/atoms/Input";
import { Header } from "./components/molecules/Header";

function App() {
  // const [hide, setHide] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center rounded-lg justify-center">
       <div className="app-container bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
        {/* All components go here */}
        <Header />
        <Input/>

         <div className="flex gap-1.5 my-3">
           <Button variant="rounded"> All </Button>
           <Button variant="rounded"> Active</Button>
           <Button variant="rounded"> Completed</Button>
         </div>
      </div>
    </div>
  );
}

export default App;
