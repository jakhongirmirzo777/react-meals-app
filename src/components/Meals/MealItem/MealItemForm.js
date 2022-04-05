import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {useState} from "react";

const FORM_DATA = {
    amount: 0
}
const MealItemForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({...FORM_DATA})
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmit({amount: +formData.amount})
        setFormData({...FORM_DATA})
    }
    const onInputChange = (type) => (e) => setFormData(prevState => ({...prevState, [type]: e.target.value}))
    return (
        <form onSubmit={submitHandler} className={classes['form']}>
            <Input
                id='amount'
                label='Amount'
                type='number'
                options={{
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
                value={formData.amount}
                onChange={onInputChange('amount')}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm