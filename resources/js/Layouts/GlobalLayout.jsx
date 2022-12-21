import React, {useContext, useState} from 'react';
import Nav from "@/Components/Authenticated/Nav/Nav";

export const CartContext=React.createContext();


export default function Global({ auth, header, children }) {
    const [sideCartActive,setSideCartActive]=useState(false);

    const closeCart=(e)=>{
        if(e)
            e.preventDefault();
        setSideCartActive(false);
    }

    const openCart=(e)=>{
        if(e)
            e.preventDefault();
        setSideCartActive(true);
    }

    return (
        <CartContext.Provider value={{sideCartActive,openCart,closeCart}}>
            <div className="min-h-screen bg-gray-100">
                <Nav auth={auth}/>

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </CartContext.Provider>
    );
}
