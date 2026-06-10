import * as React from 'react';

const InputField = ({
    label,
    required = false,
    error,
    containerClassName = '',
    className = '',
    type = 'text',
    options = [],
    value,
    onChange,
    ...props
}) => {
    if (type === 'radio') {
        return (
            <div className={`flex flex-col gap-2 ${containerClassName}`}>
                <label className='text-[14px] font-medium text-[#1D2939] mb-1'>
                    {label}
                    {required && <span className='text-[#FF0000] ml-1'>*</span>}
                </label>
                <div className='flex gap-[24px]'>
                    {options.map((option) => (
                        <label key={option.value} className='flex items-center gap-2 cursor-pointer group'>
                            <div className="relative flex items-center justify-center">
                                <input
                                    type='radio'
                                    className='peer appearance-none w-5 h-5 border-[1.5px] border-[#CBCBCB] rounded-full checked:border-[#6C38FF] transition-all cursor-pointer'
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange}
                                    {...props}
                                />
                                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#6C38FF] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                            <span className='text-[14px] text-[#1D2939] group-hover:text-[#6C38FF] transition-colors'>
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
                {error && <span className='text-[12px] text-[#FF0000] mt-1'>{error}</span>}
            </div>
        )
    }

    return (
        <div className={`relative mb-[24px] ${containerClassName}`}>
            {label && (
                <label className={`absolute -top-[10px] left-[12px] px-[4px] bg-[#F7F8F9] text-[13px] font-medium transition-colors z-10 ${error ? 'text-[#FF0000]' : 'text-[#6C38FF]'}`}>
                    {label}
                    {required && <span className='text-[#FF0000]'>*</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full h-[52px] px-[16px] border ${error ? 'border-[#FF0000]' : 'border-[#CBCBCB]'} rounded-[6px] bg-[#F7F8F9] text-[#1D2939] text-[15px] outline-none transition-all duration-300 focus:border-[#6C38FF] focus:shadow-[0_0_0_4px_rgba(108,56,255,0.1)] hover:border-[#a3a3a3] ${className}`}
                {...props}
            />
            {error && <span className='absolute -bottom-[20px] left-0 text-[12px] text-[#FF0000]'>{error}</span>}
        </div>
    )
}

export default InputField;