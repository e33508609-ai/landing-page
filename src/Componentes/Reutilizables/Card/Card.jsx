const Card = ({ 
    children, 
    className = '', 
    hover = false,
    padding = 'md',
    ...props 
  }) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    
    return (
      <div 
        className={`
          bg-white rounded-xl shadow-lg border border-gray-200
          ${paddingClasses[padding]}
          ${hover ? 'hover:shadow-xl transition-all duration-300 cursor-pointer' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default Card;