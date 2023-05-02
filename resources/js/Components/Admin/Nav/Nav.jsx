import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    MdDashboard,
    HiBuildingOffice2,
    BsFillCartCheckFill,
    GiJigsawBox,
    AiFillPrinter,
    SiGooglesheets, BsInboxesFill
} from "react-icons/all";
import {useContext, useState} from "react";
import NavLink from "@/Components/Admin/Nav/NavLink";
import NavDropdown from "@/Components/Admin/Nav/NavDropdown";

export default function Nav({auth}){

    return(
            <nav className="group z-50 bg-gray-900 fixed flex-shrink-0 max-w-xs hover:w-full h-screen top-0 left-0 w-20 transition-all overflow-hidden duration-500">
                <div className="px-4 py-4">
                    <div className="flex flex-col justify-between h-16">
                        <div className="mb-4">
                            <Link href="/resources/js/Pages">
                                <ApplicationLogo className="block h-9 w-auto text-white" />
                            </Link>
                        </div>
                        <div>
                            <NavLink title="Dashboard" icon={<MdDashboard></MdDashboard>} link={route('admin.dashboard')} active={route().current('admin.dashboard')} />

                            <NavLink title="Aziende" icon={<HiBuildingOffice2></HiBuildingOffice2>} link={route('admin.companies.index')} active={route().current('admin.companies.index')} />

                            <NavDropdown>
                                <NavDropdown.Trigger>
                                    <NavLink title="Prodotti" icon={<GiJigsawBox></GiJigsawBox>} dropdown={true} active={route().current('admin.gay')} />
                                </NavDropdown.Trigger>

                                <NavDropdown.Content>
                                    <NavDropdown.Link href={route('admin.products.index')} method="get" as="button">
                                        Prodotti
                                    </NavDropdown.Link>
                                    {/*<NavDropdown.Link href={route('admin.lots.index')} method="get" as="button">
                                        Lotti
                                    </NavDropdown.Link>*/}
                                    <NavDropdown.Link href={route('admin.categories.index')} method="get" as="button">
                                        Categorie
                                    </NavDropdown.Link>
                                    <NavDropdown.Link href={route('admin.subcategories.index')} method="get" as="button">
                                        Sottocategorie
                                    </NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>

                            <NavLink title="Protocolli di offerta" icon={<SiGooglesheets></SiGooglesheets>} link={route('admin.protocols.index')} active={route().current('admin.protocols.index')} />

                            <NavLink title="Magazzino" icon={<BsInboxesFill></BsInboxesFill>} link={route('admin.protocols.index')} active={route().current('admin.protocols.index')} />

                            <NavLink title="Ordini di evasione" icon={<BsFillCartCheckFill></BsFillCartCheckFill>} link="#" active={route().current('admin.gay')} />

                            <NavLink title="Cespiti a noleggio" icon={<AiFillPrinter></AiFillPrinter>} link="#" active={route().current('admin.gay')} />
                        </div>
                        <div className="px-4 absolute w-full bottom-8 left-0">
                            <NavDropdown>
                                <NavDropdown.Trigger>
                                    <NavLink title={auth.user.name} icon={<div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block mr-4 align-middle"></div>} dropdown={true} active={false} />
                                </NavDropdown.Trigger>

                                <NavDropdown.Content>
                                    <NavDropdown.Link href={route('logout')}>
                                        Logout
                                    </NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>
                        </div>
                    </div>
                </div>

            </nav>);
}
