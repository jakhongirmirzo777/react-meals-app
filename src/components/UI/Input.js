import React, {forwardRef} from "react";
import classes from './Input.module.css'

const Input = forwardRef(({id, type = 'text', label, value, onChange, onBlur, options}, ref) => {
    return (
        <div className={classes['input']}>
            <label htmlFor={id}>{label}</label>
            <input
                ref={ref}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...options}
            />
        </div>
    )
})

export default Input