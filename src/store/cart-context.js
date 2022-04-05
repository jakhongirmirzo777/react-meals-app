import {createContext} from "react";

const DEFAULT_VALUE = {
    items: [],
    totalAmount: 0,
    addItem(item) {
    },
    removeItem(id) {
    }
}

const CartContext = createContext(DEFAULT_VALUE)

export default CartContext