import React, {FC} from "react";
import classNames from 'classnames'
/**
 * Button大小枚举元素
 * */
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}

/**
 * Button类型枚举元素
 * */
export enum ButtonType {
    Primary ='primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

/**
 * Button组件属性接口
 * */
interface BaseButtonProps{
    className?: string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode,
    href?:string;
}

const Button:FC<BaseButtonProps> = (props)=>{
    const {
        btnType,
        disabled,
        size,
        href,
        children
    } = props;

    const classes = classNames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled': (btnType === ButtonType.Link && disabled)
    })

    if (btnType === ButtonType.Link && href){
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType : ButtonType.Default,
}

export default Button;