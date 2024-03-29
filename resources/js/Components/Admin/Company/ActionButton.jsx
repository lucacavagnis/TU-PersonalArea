import React, { useState, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import {RiArrowDownSLine} from "react-icons/all";
import {twMerge} from "tailwind-merge";

const DropDownContext = React.createContext();

const ActionButton = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen} className="cursor-pointer relative">{children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ align = 'right', width = 'w-48', contentClasses = 'p-2 bg-slate-100', children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className={'absolute z-50 mt-2 rounded-md shadow-lg ' + alignmentClasses + ' ' + width}
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 flex flex-col ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    );
};

const ActionButtonLink = ({ href, method = 'post', as = 'a', children, className="" }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={twMerge(" block my-1 w-full px-2 py-2 text-left text-sm leading-5 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-slate-200",className)}
        >
            {children}
        </Link>
    );
};

ActionButton.Trigger = Trigger;
ActionButton.Content = Content;
ActionButton.Link = ActionButtonLink;

export default ActionButton;
