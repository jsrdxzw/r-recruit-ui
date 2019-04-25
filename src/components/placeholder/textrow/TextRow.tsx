import React from 'react'
import cx from 'classnames'
import './textrow.scss'

export interface IPlaceholderTextRowProps {
    className?: string,
    prefix?: string,
    style?: React.CSSProperties,
    animate?: boolean,
    lineSpacing?: string | number
}

export default class TextRow extends React.PureComponent<IPlaceholderTextRowProps> {
    static defaultProps = {
        prefix: 'recruit',
        animate: true,
        lineSpacing: '0.7em'
    };

    render() {
        const {className, prefix, animate, style, lineSpacing} = this.props;
        const classes = cx(
            `${prefix}-placeholder-text-row`,
            `${prefix}-placeholder-shape`,
            {
                [`${prefix}-placeholder-shape--animate`]: animate
            },
            className
        );
        return (
            <div className={classes} style={{marginTop: lineSpacing, ...style}}/>
        )
    }
}