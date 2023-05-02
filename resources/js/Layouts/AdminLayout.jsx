import React, {useContext, useState} from 'react';
import Nav from "@/Components/Admin/Nav/Nav";



export default function Admin({ auth, header, children }) {



    return (
            <div className="min-h-screen bg-gray-100 flex">
                <Nav auth={auth}/>
                <div className="w-full ml-20">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
                </div>
            </div>
    );
}
