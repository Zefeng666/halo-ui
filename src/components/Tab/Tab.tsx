import React, {createContext, FunctionComponentElement, useContext, useState} from "react";
import {ITabItemProps} from "./TabItem";
import classNames from "classnames";


//选择函数
type selectCallback = (index:number)=>void

interface ITabProps{
    defaultIndex?:number;
    onSelect:selectCallback;
    className?:string;
    type?: 'line' | 'card';
}


const Tab:React.FC<ITabProps> = (props)=>{
    const {defaultIndex,className,onSelect,children,type} = props;
    const [activeIndex,setActive] = useState(defaultIndex)

    const navClass = classNames('tabs-nav',{
        'nav-line':type === 'line',
        'nav-card':type === 'card'
    })
    // const classes = className('',{
    //
    // })

    const handleClick = (e:React.MouseEvent,index:number,disabled:boolean|undefined)=>{
        if (!disabled){
            setActive(index)
            if (onSelect){
                onSelect(index)
            }
        }
    }

    //渲染Links
    const renderLinks = ()=>{
        return React.Children.map(children,(child, index) => {
            const childElement = child as FunctionComponentElement<ITabItemProps>
            const {label,disabled} = childElement.props;
            const classes = classNames('tabs-nav-item',{
                'is-active': activeIndex === index,
                'disabled':disabled
            })
            return (
                <li className={classes}
                    key={`tab-item-nav-${index}`}
                    onClick={(e)=>{handleClick(e,index,disabled)}}
                >
                    {label}
                </li>
            )
        })
    }
    //渲染Content
    const renderContent = ()=>{
        return React.Children.map(children,((child, index) => {
            if (index === activeIndex){
                return child
            }
        }))
    }

    return (
        <div className={`${className}`}>
            <ul className={navClass}>
                {renderLinks()}
            </ul>
            <div className={"tabs-content"}>
                {renderContent()}
            </div>
        </div>
    )
}

Tab.defaultProps = {
    defaultIndex:0,
    type: 'line'
}

Tab.displayName = "Tab"

export default Tab;