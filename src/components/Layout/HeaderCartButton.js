import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({onClick}) => {
    const {items} = useContext(CartContext)
    const numberOfCartItem = items.reduce((acc, cur) => acc + cur.amount, 0)
    return (
        <button onClick={onClick} className={classes['button']}>
            <span className={classes['icon']}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes['badge']}>{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartButton