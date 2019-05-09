import React from 'react'
import cx from 'classnames'
import TextRow, {IPlaceholderTextRowProps} from './TextRow'
import TextRowDashed, {IPlaceholderTextRowDashedProps, DEFAULT_SEGMENTS} from './TextRowDashed'


export interface IPlaceholderTextBlockProps {
    rows: number,
    prefix?: string,
    className?: string,
    style?: React.CSSProperties,
    animate?: boolean,
    dashed?: boolean,
    widths: number[],
    lineSpacing?: string | number,
    dashSegments?: Array<Array<string | number>>
}

export default class TextBlock extends React.PureComponent<IPlaceholderTextBlockProps> {
    static defaultProps = {
        widths: [97, 99, 94, 92, 96, 95, 98, 60],
        prefix: 'recruit',
        animate: true,
        lineSpacing: '0.7em',
        dashed: true,
    };

    getRows = () => {
        const {
            rows,
            lineSpacing,
            prefix,
            animate,
            dashed,
            widths
        } = this.props;
        const textRows = [];
        for (let i = 0; i < rows; i++) {
            const Component = dashed ? TextRowDashed : TextRow;
            const props: IPlaceholderTextRowProps & IPlaceholderTextRowDashedProps = {
                lineSpacing: i ? lineSpacing : 0,
                prefix,
                animate,
                style: {width: `${widths[i % widths.length]}%`}
            };
            if (dashed) {
                props.segments = DEFAULT_SEGMENTS[i % DEFAULT_SEGMENTS.length]
            }
            textRows.push(<Component key={i} {...props}/>)
        }
        return textRows
    };

    render() {
        const {style, className, prefix} = this.props;
        const classes = cx(`${prefix}-placeholder-text-block`, className);
        return (
            <div className={classes} style={style}>
                {this.getRows()}
            </div>
        )
    }
}
