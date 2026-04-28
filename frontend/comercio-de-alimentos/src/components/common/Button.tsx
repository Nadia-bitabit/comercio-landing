interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


function Button({children, ...props}: Props) { 
    return (
    <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        {...props}
    >
        {children}
    </button>
  );
}