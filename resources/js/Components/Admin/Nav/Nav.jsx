import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {MdDashboard,FaUser} from "react-icons/all";
import {useContext, useState} from "react";
import NavLink from "@/Components/Admin/Nav/NavLink";
import NavDropdown from "@/Components/Admin/Nav/NavDropdown";

export default function Nav({auth}){
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const active="bg-gradient-to-r from-sky-700 to-indigo-800 hover:bg-indigo-800"

    return(
            <nav className="bg-gray-900 max-w-xs w-full h-screen fixed top-0 left-0">
                <div className="px-4 py-4">
                    <div className="flex flex-col justify-between h-16">
                        <div className="mb-4">
                            <Link href="/resources/js/Pages">
                                <ApplicationLogo className="block h-9 w-auto text-white" />
                            </Link>
                        </div>
                        <div>
                            <NavLink title="Dashboard" icon={<MdDashboard></MdDashboard>} link="#" active={route().current('admin.dashboard')} />

                            <NavLink title="Users" icon={<FaUser></FaUser>} link="#" active={route().current('admin.gay')} />

                            <NavDropdown>
                                <NavDropdown.Trigger>
                                    <NavLink title="Prodotti" icon={<FaUser></FaUser>} dropdown={true} active={route().current('admin.gay')} />
                                </NavDropdown.Trigger>

                                <NavDropdown.Content>
                                    <NavDropdown.Link href={route('logout')} method="post" as="button">
                                        Prodotti
                                    </NavDropdown.Link>
                                    <NavDropdown.Link href={route('logout')} method="post" as="button">
                                        Categorie
                                    </NavDropdown.Link>
                                    <NavDropdown.Link href={route('logout')} method="post" as="button">
                                        Sottocategorie
                                    </NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>

                            <NavLink title="Cespiti a noleggio" icon={<FaUser></FaUser>} link="#" active={route().current('admin.gay')} />
                        </div>
                    </div>
                </div>

            </nav>);
}
