import React from 'react';

const Input = ({ className,type, name, placeholder, onChange, value }) => {
    return(
        <input
            className={className}
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default Input;