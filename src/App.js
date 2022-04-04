import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [dialogValue, setDialogValue] = useState(false)
    const onCloseDialog = () => setDialogValue(false)
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
            <Cart value={dialogValue} onClose={onCloseDialog}/>
        </Fragment>
    );
}

export default App;
