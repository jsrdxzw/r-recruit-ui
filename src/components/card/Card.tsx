import React from 'react'
import cx from 'classnames'
import './style.scss'

export interface ICardProps {
    type?: 'normal' | 'nested',
    title?: React.ReactNode,
    action?: React.ReactNode,
    style?: React.CSSProperties, //React style object
    bodyStyle?: React.CSSProperties,
    loading?: boolean,
    className?: string,
    prefix?: string
}

export default class Card extends React.PureComponent<ICardProps> {
    static defaultProps = {
        type: 'normal',
        style: {},
        bodyStyle: {},
        loading: false,
        prefix: 'recruit'
    };

    render() {
        const {
            type,
            title,
            action,
            loading,
            style,
            children,
            className,
            bodyStyle,
            prefix,
        } = this.props;
        return (
            <div
                className={cx(`${prefix}-card`, className, {
                    [`${prefix}-card--normal`]: type === 'normal',
                    [`${prefix}-card--nested`]: type === 'nested',
                })}
                style={style}
            >
                <div className={`${prefix}-card-header`}>
                    {title && <h3 className={`${prefix}-card-header__title`}>{title}</h3>}
                    {action && <div className={`${prefix}-card-header__action`}>{action}</div>}
                </div>
                <div className={`${prefix}-card-body`} style={bodyStyle}>
                    {children}
                </div>
            </div>
        )
    }
}
