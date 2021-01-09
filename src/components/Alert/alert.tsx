import React, {useState} from 'react';
import classNames from 'classnames';

export interface AlertProps {
    message?: string,
    type?: 'success' | 'info' | 'warning' | 'error',
    description?: string,
}


const Alert: React.FC<AlertProps> = (props) => {
    const { message, description, type } = props;

    let [close,setClose] = useState(true)

    const classes = classNames('alert', {
        [`alert-${type}`]: type,
    })
    return (close? <div className={classes}>
        <div className='alert-content'>
            <div className='alert-msg'>{message}</div>
            <div className='alert-des'>{description}</div>
        </div>
        <div className="alert-close" onClick={()=>setClose(false)}>关闭</div>
    </div> : null)
}

Alert.defaultProps = {
    message: '',
    type: 'info'
}

export default Alert;