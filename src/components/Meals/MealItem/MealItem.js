import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({meal, className}) => {
    const {addItem} = useContext(CartContext)
    const price = `$${meal.price.toFixed(2)}`
    const submitHandler = (formData) => {
        addItem({
            ...formData,
            id: meal.id,
            name: meal.name,
            price: meal.price
        })
    }
    return (
        <li className={`${className} ${classes['meal']}`}>
            <div>
                <h3>{meal.name}</h3>
                <div className={classes['description']}>{meal.description}</div>
                <div className={classes['price']}>{price}</div>
            </div>
            <div>
                <MealItemForm onSubmit={submitHandler}/>
            </div>
        </li>
    )
}

export default MealItem