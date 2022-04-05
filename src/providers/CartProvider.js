import CartContext from "../store/cart-context";
import {useReducer} from "react";

const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = action.item.amount * action.item.price
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return DEFAULT_CART_STATE
}

const CartProvider = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_CART_STATE)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider