import classes from './Input.module.css'

const Input = ({id, type = 'text', label, value, onChange, onBlur, options}) => {
    return (
        <div className={classes['input']}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...options}
            />
        </div>
    )
}

export default Input