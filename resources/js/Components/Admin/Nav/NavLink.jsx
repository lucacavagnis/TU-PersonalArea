import {Link} from "@inertiajs/inertia-react";

export default function NavLink({title,icon,link,children,active,dropdown}){

    const classes=" flex items-center py-2 px-4";
    let el=<><div className="scale-150">{icon}</div><span className="group-hover:opacity-100 opacity-0 ml-4 font-semibold whitespace-nowrap transition-opacity duration-500">{title}</span></>;

    if(dropdown)
        el=<div className={(active?"bg-gradient-to-r from-sky-700 to-indigo-800 hover:bg-indigo-800":"")+ classes}>{el}</div>

    else
        el=<Link href={link} className={(active?"bg-gradient-to-r from-sky-700 to-indigo-800 hover:bg-indigo-800":"")+ classes}>{el}</Link>

    return(
        <div className="text-white my-2 rounded transition-colors hover:bg-slate-800 overflow-hidden">
            {el}
        </div>
    )
}
