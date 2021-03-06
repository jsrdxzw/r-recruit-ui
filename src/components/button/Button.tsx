import React, {Children, ComponentType, CSSProperties, MouseEventHandler, PureComponent, ReactNode} from 'react'
import cx from 'classnames'
import './style.scss'

interface IButtonProps {
    type: 'default' | 'primary' | 'secondary' | 'danger' | 'success',
    size: 'small' | 'large' | 'normal',
    htmlType?: 'button' | 'submit' | 'reset',
    block?: boolean,
    loading: boolean,
    className?: string,
    style?: CSSProperties,
    href?: string,
    target?: string,
    prefix: string,
    disabled: boolean,
    spaceTwoChars: boolean,
    ripple: boolean,
    component?: ComponentType<any> | string,
    onClick?: MouseEventHandler<Element>
}

const wrapTextWithSpanTag = (children: ReactNode, isNeedInsertSpace: boolean) => {
    return Children.map(children, child => {
        if (typeof child === 'string') {
            if (isNeedInsertSpace && child.length === 2) {
                return <span>{child.trim().split('').join(' ')}</span>
            }
            return <span>{child.trim()}</span>
        }
        return child
    })
};

export default class Button extends PureComponent<IButtonProps> {
    static defaultProps = {
        type: 'default',
        size: 'normal',
        prefix: 'recruit',
        disabled: false,
        loading: false,
        spaceTwoChars: true,
        ripple: true
    };

    renderLinkOrButton(className: string, wrappedChildren: ReactNode) {
        const {type, size, prefix, component, href, target, disabled, loading, ripple, spaceTwoChars, ...otherProps} = this.props;
        const Node = component || (this.isLink() ? 'a' : 'button');
        const nodeProps = (href || target) ? {href, target, ...otherProps} : otherProps;
        return (
            <Node {...nodeProps} className={className} disabled={disabled} onClick={this.handleClick}>
                {wrappedChildren}
            </Node>
        )
    }

    handleClick: MouseEventHandler = (event) => {
        const {disabled, loading, onClick} = this.props;
        if (disabled || loading) return;
        if (onClick) {
            onClick(event)
        }
    };

    isInsertSpace(): boolean {
        const {children, spaceTwoChars} = this.props;
        return spaceTwoChars && Children.count(children) === 1
    }

    isLink(): boolean {
        const {href, target} = this.props;
        return !!href || !!target
    }

    render() {
        const {prefix, className, size, children, type, ripple, disabled, loading} = this.props;
        console.log(type);
        const classNames = cx(`${prefix}-btn`, {
            [`${prefix}-btn-${size}`]: true,
            [`${prefix}-btn-${type}`]: type !== 'default',
            [`${prefix}-btn-ripple`]: ripple && !this.isLink() && !disabled && !loading,
            [`${prefix}-btn-loading`]: loading,
            [`${prefix}-btn-disabled`]: disabled
        }, className);
        const wrappedChildren = wrapTextWithSpanTag(children, this.isInsertSpace());
        return this.renderLinkOrButton(classNames, wrappedChildren)
    }
}
