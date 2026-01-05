import "./Button.css";

export function Button({
  children,
  variant = "default",
  onClick,
  active = false,
  ariaLabel,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} ${active ? "btn-active" : " "}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
