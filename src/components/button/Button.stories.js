import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index'


storiesOf('Button', module)
    .add('button', () => (
        <div>
            <Button type={'primary'} size={'large'} spaceTwoChars={true}>
                提出
            </Button>
            <hr/>
            <Button type={'danger'}>
                エラー
            </Button>
            <hr/>
            <Button type={'success'}>
                成功
            </Button>
        </div>
        )
    )
    .add('a', () =>
        <Button href={'https://www.baidu.com'} target={'_blank'} type={'primary'}>
            提出
        </Button>
    )
;
