import { ReactNode } from "react";


export interface MenuGrupoProps {
    label:string;
    children?:ReactNode;
    className?:string;
};

export default function MenuGrupo(props:MenuGrupoProps) {
    return (
        <div 
            className={`
                flex flex-col gap-1
                ${ props.className ?? '' }
            `}
        > 
            <span className="text-white font-semibold">{ props.label }</span>
            <div>
                { props.children }
            </div>
        </div>
    );
};