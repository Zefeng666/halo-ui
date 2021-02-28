import React, {useContext, FunctionComponentElement, useState} from "react";
import classNames from "classnames";
import {MenuContext} from "./Menu";
import {MenuItemProps} from "./MenuItem";

export interface SubMenuProps {
    index?:string,
    title:string,
    className?:string
}


const SubMenu:React.FC<SubMenuProps> = (props)=>{
    const menuContext = useContext(MenuContext);

    const {index,title,children} = props;

    const defaultOpenedSubMenu = menuContext.defaultOpenSubMenus as Array<string>;
    const isOpen = (index && menuContext.mode === 'vertical'&& defaultOpenedSubMenu.includes(index))

    const [openStatus,setOpenStatus] = useState(isOpen);

    const handleClick = (e:React.MouseEvent)=>{
        e.preventDefault();
        if (menuContext.onSelect && (typeof index === 'string')){
            menuContext.onSelect(index);
        }
        setOpenStatus(!openStatus);
    }

    //使用timer使得更加平滑
    let timer : any = null;

    const handleMouse = (e:React.MouseEvent,toggle:boolean) =>{
        timer && clearTimeout(timer)
        e.preventDefault();
        timer = setTimeout(()=>{
            setOpenStatus(toggle)
        },300)
    }

    const classes = classNames('menu-item submenu-item',{
        'is-active':menuContext.index === index
    })

    //如果当前的Menu是横向的，那么hover就触发子菜单的显示
    //如果当前的Menu是纵向的，那么click才触发子菜单的显示
    const clickEvents = menuContext.mode === 'vertical' ? {
        onClick:handleClick
    }:{};


    const hoverEvents = menuContext.mode !=='vertical' ? {
        onMouseEnter:(e:React.MouseEvent)=>{
            handleMouse(e,true)
        },
        onMouseLeave:(e:React.MouseEvent)=>{
            handleMouse(e,false)
        }
    }: {};

    const renderChildren = ()=>{
        const subMenuClass = classNames('submenu',{
            'menu-opened': openStatus
        })
        const childrenComponent = React.Children.map(children,(element,i)=>{
            const child = element as FunctionComponentElement<MenuItemProps>
            const {displayName}  = child.type;
            const {index} = child.props;
            if (displayName === 'MenuItem'){
                return React.cloneElement(child,{
                    index:`${index}-${i}`
                })
            }else {
                console.warn("Warning: SubMenu has children which is not a MenuItem Component")
            }
        })
        return (
            <ul className={subMenuClass}>
                {childrenComponent}
            </ul>
        )
    };

    return (
        <li key={index} className={classes} {...hoverEvents} {...clickEvents}>
            <div className='submenu-title'>
                {title}
                <div className={"arrow-icon"}>➡︎</div>
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu


