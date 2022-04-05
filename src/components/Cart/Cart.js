import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import {Fragment, useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({value, onClose}) => {
    const {items, totalAmount, addItem, removeItem} = useContext(CartContext)
    const hasItems = items?.length > 0 || false
    const addItemHandler = (item) => () => addItem({...item, amount: 1})
    const removeItemHandler = (id) => () => removeItem(id)
    return (
        <Fragment>
            {value && <Modal onClose={onClose}>
                <ul className={classes['cart-items']}>
                    {items.map(cartItem => <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        onAdd={addItemHandler(cartItem)}
                        onRemove={removeItemHandler(cartItem.id)}
                    />)}
                </ul>
                <div className={classes['total']}>
                    <span>Total Amount</span>
                    <span>{totalAmount.toFixed(2)}</span>
                </div>
                <div className={classes['actions']}>
                    <button onClick={onClose} className={classes['button--alt']}>Close</button>
                    {hasItems && <button className={classes['button']}>Order</button>}
                </div>
            </Modal>}
        </Fragment>
    )
}

export default Cart