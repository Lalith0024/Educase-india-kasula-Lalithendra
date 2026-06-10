import React from 'react';

const Button = ({
    children,
    variant = "primary",
    fullwidth = true,
    className = '',
    style,
    disabled = false,
    ...props
}) => {
    let baseClasses = "flex justify-center items-center py-[14px] px-[24px] rounded-[6px] font-semibold text-[16px] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[2px] hover:shadow-md active:translate-y-[0px] active:shadow-sm";
    
    let variantClasses = "";
    if (variant === "primary") {
        variantClasses = disabled 
            ? "bg-[#CBCBCB] text-white cursor-not-allowed hover:-translate-y-0 hover:shadow-none"
            : "bg-[#6C38FF] text-white hover:bg-[#5b2de6]";
    } else if (variant === "secondary") {
        variantClasses = disabled
            ? "bg-[#CBCBCB] text-[#1D2939] cursor-not-allowed hover:-translate-y-0 hover:shadow-none bg-opacity-50"
            : "bg-[#CBCBCB] bg-opacity-30 text-[#1D2939] hover:bg-opacity-50";
    }

    let widthClass = fullwidth ? "w-full" : "w-auto";

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`}
            style={style}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;