import CartContext from "../store/cart-context";
import {useReducer} from "react";

const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        let updatedItems = []
        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        let updatedItems = [...state.items]
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1
        }
        if (updatedItem.amount < 1) updatedItems.splice(existingCartItemIndex, 1)
        else updatedItems[existingCartItemIndex] = updatedItem
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