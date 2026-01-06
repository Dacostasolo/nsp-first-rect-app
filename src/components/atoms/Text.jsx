import "./Text.css";

export function Text({
  children,
  variant = "normal",
  as: Component = "p",
  className = "",
}) {
  return (
    <Component className={`text text-${variant} ${className}`}>
      {children}
    </Component>
  );
}
