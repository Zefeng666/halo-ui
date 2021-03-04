import React from "react";
import classNames from "classnames";
import {FontAwesomeIcon,FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps{
    theme?:ThemeProps;
}


const Icon:React.FC<IconProps> = (props)=>{
    const {theme,className,...restProps}= props;
    const classes = classNames(`halo-icon`,className,{
        [`halo-icon-${theme}`]:theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}

export default Icon;