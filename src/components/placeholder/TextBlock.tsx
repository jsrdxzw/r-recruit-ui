import React from 'react'
import cx from 'classnames'

export interface ITextBlockProps {
    rows: number,
    lineSpacing?: string | number,
    widths?: Array<number>,
    dashSegments?: Array<Array<string | number>>,
    animate?: boolean,
    dashed?: boolean,
    style?: React.CSSProperties,
    className?: string,
    prefix?: string
}

export default class TextBlock extends React.PureComponent<ITextBlockProps> {
    static defaultProps = {
        widths: [97, 99, 94, 92, 96, 95, 98, 60],
        animate: true,
        dashed: true,
        lineSpacing: '0.7em',
        prefix: 'recruit'
    };

    getRows = () => {
        const {rows, lineSpacing, prefix, animate, dashed} = this.props;
        const textRows = [];
        for (let i = 0; i < rows; i++) {
            
        }
    };

    render() {
        const {style, className, prefix} = this.props;
        const classes = cx(`${prefix}-placeholder-text-block`, className);
        return (
            <div>textblock</div>
        )
    }
}
