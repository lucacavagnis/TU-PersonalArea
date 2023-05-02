
export const ImageUploadInput=({name,onChange})=>{
    return(
        <input className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded file:border-0
            file:text-sm file:font-medium
            file:bg-indigo-700 file:text-white
            hover:file:cursor-pointer hover:file:bg-indigo-500
            hover:file:text-white
" type="file" name={name} onChange={(e)=>onChange(e)}/>
    )
}
