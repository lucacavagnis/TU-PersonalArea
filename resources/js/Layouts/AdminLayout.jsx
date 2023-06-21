import React, {useContext, useEffect, useState} from 'react';
import Nav from "@/Components/Admin/Nav/Nav";
import {MessagePopUp} from "@/Components/Admin/MessagePopUp";

export const PopUpMessageContext=React.createContext()

export default function Admin({ auth, header, children, msg }) {

    const [message,setMessage]=useState({
        active:false,
    })

    const showMessagePopUp=(content,className="",postive=true,time=5000)=>{
        setMessage({
            ...message,
            children:content,
            className:className,
            active:true,
            positive:postive,
        })

        setTimeout(()=>{
            setMessage({
                    ...message,
                    children:content,
                    className:className,
                    active: false,
                    positive:postive,
                }
            )
        },time)
    }


    useEffect(()=>{
        console.log(msg)
    if(msg)
        showMessagePopUp((
            <>
                <h3 className="font-bold text-lg">{msg.title}</h3>
                <p>{msg.text}</p>
            </>
            ),"",msg.positive
        )
    },[msg])


    return (
            <PopUpMessageContext.Provider value={showMessagePopUp}>
            <div className="min-h-screen bg-gray-100 flex">
                <Nav auth={auth}/>
                <div className="w-full ml-20">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
                    <MessagePopUp time={message.time} className={message.className} active={message.active}>
                        {message.children}
                    </MessagePopUp>
                </div>
            </div>
            </PopUpMessageContext.Provider>
    );
}
