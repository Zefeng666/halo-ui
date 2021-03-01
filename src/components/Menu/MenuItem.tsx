import React, {FC,useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "./Menu";


export interface MenuItemProps{
    index?:string,
    disabled?:boolean,
    className?:string,
    style?:React.CSSProperties
}

const MenuItem:FC<MenuItemProps> = (props)=>{
    const {index,disabled,className,style,children} = props
    const context = useContext(MenuContext)
    const handleClick = ()=>{
        if (context.onSelect && !disabled && (typeof index === 'string')){
            context.onSelect(index);
        }
    }
    const classes = classNames('menu-item',className,{
        'is-disabled':disabled,
        'is-active':context.index === index,
    })
    return (
        <li style={style} className={classes} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.defaultProps = {
    disabled:false
}

MenuItem.displayName = 'MenuItem';

export default MenuItem;
