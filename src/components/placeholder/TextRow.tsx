import React from 'react'

export interface IPlaceholderTextRowProps {
    className?: string,
    prefix?: string,
    style?: React.CSSProperties,
    animate?: boolean,
    lineSpacing?: string | number
}

export default class TextRow extends React.PureComponent<IPlaceholderTextRowProps> {

    static defaultProps = {
        lineSpacing: '0.7em',
        animate: true,
        prefix: 'recruit'
    };

    render() {
        return (
            <div>123</div>
        )
    }
}
