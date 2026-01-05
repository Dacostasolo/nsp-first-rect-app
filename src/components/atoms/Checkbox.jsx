import { useState } from "react";
import { Check } from "lucide-react";

export function Checkbox({ onChange, checked: defaultChecked }) {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className={`w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center relative cursor-pointer ${checked ? 'bg-orange-500 border-orange-500' : 'bg-white'}`}>
      {checked && <Check className={checked ? 'text-white' : 'text-gray-400'}/>}
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleChange}
        className="opacity-0 w-full h-full absolute "
      />
    </div>
  );
}
