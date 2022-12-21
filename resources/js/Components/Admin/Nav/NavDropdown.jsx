import React, { useState, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import {MdArrowDropDown} from "react-icons/all";

const DropDownContext = React.createContext();

const NavDropdown = ({ children }) => {
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
            <div onClick={toggleOpen} className="cursor-pointer">{children}<span className="float-right"><MdArrowDropDown></MdArrowDropDown></span></div>
        </>
    );
};

const Content = ({ align = 'right', width = 'w-full', contentClasses = 'py-1 bg-slate-700', children }) => {
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
                    className={'mt-2 rounded-md shadow-lg ' + alignmentClasses + ' ' + width}
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 flex flex-col ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ href, method = 'post', as = 'a', children }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-white focus:outline-none transition duration-150 ease-in-out"
        >
            {children}
        </Link>
    );
};

NavDropdown.Trigger = Trigger;
NavDropdown.Content = Content;
NavDropdown.Link = DropdownLink;

export default NavDropdown;
