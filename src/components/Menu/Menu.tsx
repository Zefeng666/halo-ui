import React, {createContext, FC, FunctionComponentElement, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./MenuItem";


export type MenuMode = 'horizontal' | 'vertical';

type selectCallBack = (selectIndex:string)=>void;

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:selectCallBack;
    defaultOpenSubMenus?: string[];
}

interface IMenuContext{
    index:string;
    onSelect?:selectCallBack;
    mode:MenuMode,
    defaultOpenSubMenus?: string[];
}


export const MenuContext = createContext<IMenuContext>({index:"0",mode:"horizontal"})

const Menu:FC<MenuProps> = (props)=>{
    const {className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus} = props;
    const [currentActive,setActive] = useState(defaultIndex);
    //handleClick函数交给子组件去执行
    const handleClick = (index:string)=>{
        setActive(index)
        onSelect && onSelect(index)
    }
    const passedContext:IMenuContext = {
        index:currentActive ? currentActive : "0",
        onSelect:handleClick,
        mode:mode || 'horizontal',
        defaultOpenSubMenus
    }
    const classes = classNames('menu',className,{
        'menu-vertical':mode==='vertical',
        'menu-horizontal':mode === 'horizontal'
    })

    const renderChildren = ()=>{
        return React.Children.map(children,(element,index)=>{
            const childElement = element as FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            const {index:userDefinedIndex} = childElement.props;
            if (displayName === 'MenuItem' || displayName === 'SubMenu'){
                return React.cloneElement(childElement,{
                    index:userDefinedIndex || `${index}`,
                });
            }else {
                console.warn("Warning: Menu has children which is not a MenuItem Component")
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex:"0",
    mode: 'horizontal',
    defaultOpenSubMenus:[]
}

export default Menu
