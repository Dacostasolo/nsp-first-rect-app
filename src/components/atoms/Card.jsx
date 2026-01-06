export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        flex items-center gap-4 
        border
         border-slate-100 
        bg-white/40 
        rounded-sm 
        p-4 
        w-60          
        hover:bg-blue-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
