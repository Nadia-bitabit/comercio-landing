interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, color, ...props }: Props) {
  return (
    <button 
      className={`${color || "bg-[#1A535C]"} text-2xl font-bold text-white px-8 py-4 backdrop-blur-md rounded-full`}
      {...props}
    >
      {children}
    </button>
  );
}
