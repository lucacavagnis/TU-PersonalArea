import React from 'react';

export default function Translation({key,replace}){
    const translate=(key,replace={})=>{
        var translation = this.$page.language[key]
            ? this.$page.language[key]
            : key

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation
    }

    return(
        translate(key,replace)
    )
}
