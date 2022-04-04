import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemForm = () => {
    return (
        <form className={classes['form']}>
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
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm