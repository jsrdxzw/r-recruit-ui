import React, {PureComponent, Children} from 'react'
import cx from 'classnames'
import './style.scss'

export type IconType = 'search'

export interface IIconProps {
    type: IconType,
    prefix: string,
    className?: string
}

export default class Icon extends PureComponent<IIconProps> {
    static defaultProps = {
        prefix: 'recruit'
    };

    render() {
        const {type, className, prefix, children, ...otherProps} = this.props;
        const classNames = cx(`${prefix}-icon`, `${prefix}-icon-${type}`, className);
        const number = Children.count(children);
        return <i className={classNames} {...otherProps}>{number >= 1 ? children : null}</i>
    }
}
