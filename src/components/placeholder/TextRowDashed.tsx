import React from 'react'
import cx from 'classnames'
import {sample} from '../../utils/sample'
import './style.scss'

export const DEFAULT_SEGMENTS = [
    [60, 38],
    [30, 25, 44],
    [24, 71],
    [31, 12, 18, 25],
    [13, 33, 53],
    [41, 14, 42],
    [20, 10, 47, 18],
    [14, 47, 37]
];

export interface IPlaceholderTextRowDashedProps {
    className?: string,
    prefix?: string,
    style?: React.CSSProperties,
    animate?: boolean,
    lineSpacing?: string | number,
    segments?: Array<number>
}

// export interface IPlaceholderTextRowDashedState {
//     segments: number[]
// }

export default class TextRowDashed extends React.PureComponent<IPlaceholderTextRowDashedProps> {
    static defaultProps = {
        prefix: 'recruit',
        animate: true,
        lineSpacing: '0.7em',
        segments: sample(DEFAULT_SEGMENTS)
    };

    // constructor(props: IPlaceholderTextRowDashedProps) {
    //     super(props);
    //     this.state = {
    //         segments:
    //     }
    // }

    render() {
        const {className, prefix, style, lineSpacing, animate, segments} = this.props;
        const classes = cx(`${prefix}-placeholder-text-row-dashed`, className);
        const segmentClasses = cx(`${prefix}-placeholder-shape`, {
            [`${prefix}-placeholder-shape--animate`]: animate
        });
        return (
            <div className={classes} style={{marginTop: lineSpacing, ...style}}>
                {segments && segments.map((seg, i) => (
                    <div
                        key={i}
                        className={`${prefix}-placeholder-text-row-dashed-segment`}
                        style={{width: `${seg}%`, paddingLeft: i === 0 ? 0 : '0.3em'}}
                    >
                        <div className={segmentClasses}/>
                    </div>
                ))}
            </div>
        )
    }
}