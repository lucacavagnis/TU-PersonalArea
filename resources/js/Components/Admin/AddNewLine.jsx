import InputLabel from "@/Components/Inputs/InputLabel";
import Select from "@/Components/Inputs/Select";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import TextInput from "@/Components/Inputs/TextInput";
import Button from "@/Components/Buttons/Button";
import React from "react";

export const AddNewLine=({children, title})=>{
    return(
        <div className="border-t border-indigo-300 py-4">
            {(title && <h3 className="text-lg font-semibold pb-2">{title}</h3>)}
        <div className="flex items-end">
            {children}
        </div>
        </div>
    )
}
