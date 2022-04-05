import {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./providers/CartProvider";

function App() {
    const [dialogValue, setDialogValue] = useState(false)
    const onCloseDialog = () => setDialogValue(false)
    const onOpenDialog = () => setDialogValue(true)
    return (
        <CartProvider>
            <Header onOpen={onOpenDialog}/>
            <main>
                <Meals/>
            </main>
            <Cart value={dialogValue} onClose={onCloseDialog}/>
        </CartProvider>
    );
}

export default App;
