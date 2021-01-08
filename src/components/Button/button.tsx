import React, {FC} from "react";
import classNames from 'classnames'
/**
 * Button大小枚举元素
 * */
export enum ButtonSize {
    Large = 'lg',
    Middle = 'md',
    Small = 'sm',
}

/**
 * Button类型枚举元素
 * */
export enum ButtonType {
    Primary ='primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
    Warning ='warning'
}

/**
 * Button组件基础属性接口
 * */
interface BaseButtonProps{
    className?: string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode,
    href?:string;
}

//Button按钮 原生属性与自定义属性的组合
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>




const Button:FC<ButtonProps> = (props)=>{
    const {
        btnType,
        className,
        disabled,
        size,
        href,
        children,
        ...restProps
    } = props;

    //btn 基本属性，className 用户自定义样式, 组件属性推断出的样式
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled': (btnType === ButtonType.Link && disabled)
    })

    if (btnType === ButtonType.Link && href){
        return (
            <a
                className={classes}
                href={href}
                {...restProps as AnchorButtonProps}
            >
                {children}
            </a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps as ButtonProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType : ButtonType.Default,
    size: ButtonSize.Small
}

export default Button;