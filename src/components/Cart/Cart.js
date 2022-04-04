import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import {Fragment} from "react";

const Cart = ({value, onClose}) => {
    const cartItems = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: 2,
            price: 12.99
        }
    ]
    return (
        <Fragment>
            {value && <Modal onClose={onClose}>
                <ul className={classes['cart-items']}>
                    {cartItems.map(cartItem => <li key={cartItem.id}>{cartItem.name}</li>)}
                </ul>
                <div className={classes['total']}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes['actions']}>
                    <button onClick={onClose} className={classes['button--alt']}>Close</button>
                    <button className={classes['button']}>Order</button>
                </div>
            </Modal>}
        </Fragment>
    )
}

export default Cart