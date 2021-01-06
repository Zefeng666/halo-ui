import React from 'react';

interface AlertProps {
    message?: string
}

export const Alert: React.FC<AlertProps> = (props) => {
    const { message } = props;
    return <div>
        {message}
    </div>
}

Alert.defaultProps = {
    message: ''
}

export default Alert;