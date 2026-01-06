import { useState, useRef } from "react";
import { Button } from "./Button";
import { Plus } from "lucide-react";

export function Input() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={focusInput}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-500 transition-colors cursor-pointer hover:text-indigo-500"
        >
          <Plus className="text-lg" />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task..."
          className="w-full pl-12 pr-20 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-400"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button type="submit" variant="default" onClick={() => {}}>
            Add
          </Button>
        </div>
      </div>
    </>
  );
}
