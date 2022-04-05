import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({onClick}) => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false)
    const {items} = useContext(CartContext)
    useEffect(() => {
        if (!items.length) return
        setIsBtnHighlighted(true)
        const timer = setTimeout(() => setIsBtnHighlighted(false), 300)
        return () => clearTimeout(timer)
    }, [items])
    const numberOfCartItem = items.reduce((acc, cur) => acc + cur.amount, 0)
    return (
        <button onClick={onClick} className={`${classes['button']} ${isBtnHighlighted && classes['bump']}`}>
            <span className={classes['icon']}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes['badge']}>{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartButton