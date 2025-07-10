export default function LandingButton({
  children,
  className = "",
  variant = "solid",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-300";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    solid: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-600 text-green-700 bg-white hover:bg-green-50",
  };
  return (
    <button
      className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.solid} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}