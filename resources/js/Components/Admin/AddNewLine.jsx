import InputLabel from "@/Components/Inputs/InputLabel";
import Select from "@/Components/Inputs/Select";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import TextInput from "@/Components/Inputs/TextInput";
import Button from "@/Components/Buttons/Button";
import React from "react";

export const AddNewLine=({children})=>{
    return(
        <div className="flex py-4 pt-4 border-t border-indigo-300 items-end">
            {children}
        </div>
    )
}
