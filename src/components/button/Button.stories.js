import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index'


storiesOf('Button', module)
    .add('button', () => (
        <div>
            <Button type={'primary'} size={'large'} onClick={action('primary button clicked')} disabled loading>
                提出
            </Button>
            <hr/>
            <Button type={'danger'} onClick={action('danger button clicked')} loading>
                エラー
            </Button>
            <hr/>
            <Button type={'success'} onClick={action('success button clicked')} loading>
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
