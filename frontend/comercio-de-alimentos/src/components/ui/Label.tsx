interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ( { children, ...props } : LabelProps) => {
  return (
    <div>
      <div className="mt-2">
        <label
          className="block text-sm/6 font-medium text-gray-900"
          {...props}
        >
          {children}
        </label>
      </div>
    </div>
    
  )
}

export default Label