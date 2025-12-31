import { LucideMessageCircleWarning } from "lucide-react";
import React, { cloneElement } from "react";

type PlaceHolderProps = {
    label : string;
    icon? : React.ReactElement<{className?: string}>;
    button ?: React.ReactNode;
};


const PlaceHolder = ({ 
    label,
    icon = <LucideMessageCircleWarning /> ,
    button = null 
} : PlaceHolderProps) => {
    return(
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon,{
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {button}
        </div>
    )
}


export {PlaceHolder};