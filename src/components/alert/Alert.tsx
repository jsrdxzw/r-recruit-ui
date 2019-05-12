import React, {PureComponent} from 'react'
import cx from 'classnames'
import {isFunction} from '../util/check-type'
import './style.scss'


export interface IAlertProps {
    type: 'info' | 'warning' | 'danger' | 'error',
    size: 'normal' | 'large',
    rounded: boolean,
    closable: boolean,
    onClose?: () => void,
    children: React.ReactNode,
    className?: string,
    prefix: string
}

const styleClassMap = {
    info: 'alert-style-info',
    warning: 'alert-style-warning',
    error: 'alert-style-error',
    danger: 'alert-style-danger',
};

export default class Alert extends PureComponent<IAlertProps> {
    static defaultProps = {
        prefix: 'recruit',
        type: 'info',
        size: 'normal',
        closable: false,
        rounded: false,
    };

    state = {
        closed: false
    };


    render() {
        const {closed} = this.state;
        const {prefix, className, size, children, closable, rounded, type} = this.props;
        const cls = cx(`${prefix}-alert`, `${prefix}-alert-${type}`,
            {
                [`${prefix}-alert-border-rounded`]: rounded,
                [`${prefix}-alert-closable`]: closable
            },
            className);
        return (
            <div className={cls}>
                {closable &&
                (
                    <div className={`${prefix}-alert-close-wrapper`}>
                      <span className={`${prefix}-alert-close-btn`} onClick={this.onClose}>
                        ×
                      </span>
                    </div>
                )}
                <div className={`${prefix}-alert-content-wrapper`}>
                    <div className={`${prefix}-alert-content`}>{children}</div>
                </div>
            </div>
        )
    }

    onClose = () => {
        this.setState({
            closed: true,
        }, () => {
            const {onClose} = this.props;
            if (onClose && isFunction(onClose)) {
                onClose()
            }
        })
    }
}
