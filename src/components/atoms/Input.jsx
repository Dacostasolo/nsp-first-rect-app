import { useState } from "react";
import { Button } from "./Button";
import { Plus } from "lucide-react";

export function Input() {
  return (
    <>
      <div className="relative">
        <div
          onClick={() => {}}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
        >
          <Plus className="text-lg" />
        </div>
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full pl-12 pr-20 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-400"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" variant="default" onClick={() => {}}>
          Add
        </Button>
      </div>
    </>
  );
}
