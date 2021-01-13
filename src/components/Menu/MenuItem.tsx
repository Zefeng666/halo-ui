import React, {FC,useContext} from "react";
import classNames from "classnames";
import Menu, {MenuContext} from "./Menu";


export interface MenuItemProps{
    index:number,
    disabled?:boolean,
    className?:string,
    style?:React.CSSProperties
}

const MenuItem:FC<MenuItemProps> = (pros)=>{
    const {index,disabled,className,style,children} = pros
    const context = useContext(MenuContext)
    const handleClick = ()=>{
        if (context.onSelect && !disabled){
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

export default MenuItem;