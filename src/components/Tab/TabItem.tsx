import React from "react";

export interface ITabItemProps {
    label:string | React.ReactElement,
    disabled?:boolean
}

const TabItem:React.FC<ITabItemProps> = ({children})=>{
    return (<div>
        {children}
    </div>)
}


export default TabItem;
