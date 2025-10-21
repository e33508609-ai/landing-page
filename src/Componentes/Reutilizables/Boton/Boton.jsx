const Boton = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    onClick, 
    disabled = false,
    className = '',
    ...props 
  }) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2";
    
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500",
      outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    const disabledClasses = "opacity-50 cursor-not-allowed";
    
    return (
      <button
        className={`
          ${baseClasses}
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? disabledClasses : 'transform hover:scale-105'}
          ${className}
        `}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Boton;  