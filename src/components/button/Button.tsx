import React, {Children, ComponentType, CSSProperties, MouseEventHandler, PureComponent, ReactNode} from 'react'
import cx from 'classnames'
import './style.scss'

const TWO_JP_CHAR_REG = /^[\u0800-\u4e00]{2}$/;

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
    disabled?: boolean,
    spaceTwoChars: boolean,
    component?: ComponentType<any> | string,
    onClick?: MouseEventHandler<Element>
}

const wrapTextWithSpanTag = (children: ReactNode, isNeedInsertSpace: boolean) => {
    return Children.map(children, child => {
        if (typeof child === 'string') {
            if (isNeedInsertSpace && TWO_JP_CHAR_REG.test(child)) {
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
    };

    renderLinkOrButton(className: string, wrappedChildren: ReactNode) {
        const {component, href, target, disabled, loading} = this.props;
        const Node = component || ((href || target) ? 'a' : 'button');
        return (
            <Node {...this.props} className={className} disabled={disabled || loading} onClick={this.handleClick}>
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

    render() {
        const {prefix, className, size, children} = this.props;
        const classNames = cx({
            [`${prefix}-btn-large`]: size === 'large',
            [`${prefix}-btn-normal`]: size === 'normal',
            [`${prefix}-btn-small`]: size === 'small',
        }, `${prefix}-btn`, className);
        const wrappedChildren = wrapTextWithSpanTag(children, this.isInsertSpace());
        return this.renderLinkOrButton(classNames, wrappedChildren)
    }
}