import {clsx} from "clsx"
import {twMerge} from 'tailwind-merge'
// Tailwin merge where we have multiple classname we can only use cn() inside pass lists of style 
export const cn = (...inputs)=>{
    return twMerge(clsx(inputs))

}