import React, {useState} from 'react';
import classNames from 'classnames';

export interface AlertProps {
    title: string,
    type?: 'success' | 'primary' | 'warning' | 'error',
    description?: string,
    closable?: boolean;
}


const Alert: React.FC<AlertProps> = (props) => {
    const { title, description, type ,closable} = props;

    const [close,setClose] = useState(true)

    //
    const classes = classNames('alert', {
        [`alert-${type}`]: type
    })

    const titleClass = classNames('alert-title',{
        'alert-title-bold': description
    })
    //如果不仅包含title，还存在desc的话,title 的样式应该加粗
    return (close? <div className={classes}>
        <div className='alert-content'>
            <div className={titleClass}>{title}</div>
            {description?<div className='alert-des'>{description}</div>:null}
        </div>
        {closable ? <div className="alert-close" onClick={()=>setClose(false)}>❌</div>:null}
    </div> : null)
}

Alert.defaultProps = {
    type: 'primary',
    closable: false
}

export default Alert;