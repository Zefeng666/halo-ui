import React from 'react';
import classNames from 'classnames';

export interface AlertProps {
    message?: string,
    type?: 'success' | 'info' | 'warning' | 'error',
    description?: string,
}

const Alert: React.FC<AlertProps> = (props) => {
    const { message, description, type } = props;
    const classes = classNames('alert', {
        [`alert-${type}`]: type,
    })
    return <div className={classes}>
        <div className='alert-content'>
            <div className='alert-msg'>{message}</div>
            <div className='alert-des'>{description}</div>
        </div>
    </div>
}

Alert.defaultProps = {
    message: '',
    type: 'info'
}

export default Alert;