import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/Authenticated/Nav/NavLink";
import NavDropdown from "@/Components/Authenticated/Nav/NavDropdown";
import ResponsiveNavLink from "@/Components/Authenticated/Nav/ResponsiveNavLink";
import {useContext, useState} from "react";
import {TfiBag} from "react-icons/all";
import SideCart from "@/Components/Authenticated/Cart/SideCart";
import {CartContext} from "@/Layouts/AuthenticatedLayout";

export default function Nav({auth}){
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const cartProductNumber = () => {
            var qty_total=0;

            if(auth.cart!=null)
            auth.cart.products.forEach((product)=>{
                qty_total+=product.qty;
            });
            return qty_total;
    };

    const {openCart}=useContext(CartContext)




    return(
       <>

    <SideCart cart={auth.cart} />
    <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="shrink-0 flex items-center">
                        <Link href={route('products.dashboard')}>
                            <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                        </Link>
                    </div>

                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink href={route('products.dashboard')} active={route().current('products.dashboard')}>
                            Prodotti
                        </NavLink>
                    </div>

                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink href={route('orders.index')} active={route().current('orders.index')}>
                            Ordini
                        </NavLink>
                    </div>

                    {auth.user.company.machines && (
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={route('machines.index')} active={route().current('machines.index')}>
                                Macchine a noleggio
                            </NavLink>
                        </div>
                    )}
                </div>

                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="ml-3 relative">
                        <div className="relative">
                            <TfiBag className="scale-[1.3] cursor-pointer" fill="#6b7280" onClick={(e)=>openCart(e)}/>
                            <div className="absolute top-[-1em] left-[-1.3em] rounded-full bg-indigo-600 text-gray-50 text-xs pl-[0.3em] pr-[0.3em] text-center">{cartProductNumber()}</div>
                        </div>
                    </div>

                    <div className="ml-3 relative">
                        <NavDropdown>
                            <NavDropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                            </NavDropdown.Trigger>

                            <NavDropdown.Content>
                                <NavDropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </NavDropdown.Link>
                            </NavDropdown.Content>
                        </NavDropdown>
                    </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                    <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                    <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    </nav>

       </> );
}
