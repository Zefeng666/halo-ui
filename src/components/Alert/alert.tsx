import React, {useRef, useState} from 'react';
import classNames from 'classnames';

export interface AlertProps {
    title: string,
    type?: 'success' | 'primary' | 'warning' | 'error',
    description?: string,
    closable?: boolean,
    onclose?:(e:HTMLDivElement)=>void
}


const Alert: React.FC<AlertProps> = (props) => {
    const { title, description, type ,closable,onclose} = props;

    const [close,setClose] = useState(true)

    const alertRef = useRef<HTMLDivElement>(null)

    const classes = classNames('alert', {
        [`alert-${type}`]: type
    })

    //如果不仅包含title，还存在desc的话,title 的样式应该加粗
    const titleClass = classNames('alert-title',{
        'alert-title-bold': description
    })

    return (close ? <div ref={alertRef} className={classes}>
        <div className='alert-content'>
            <div className={titleClass}>{title}</div>
            {description?
                <div className='alert-des'>{description}</div>
                :null}
        </div>
        {closable ?
            <div className="alert-close" onClick={()=>{setClose(false); onclose && onclose(alertRef.current as HTMLDivElement)}}>❌</div>
            :null}
    </div>:null)
}

Alert.defaultProps = {
    type: 'primary',
    closable: false,
}

export default Alert;