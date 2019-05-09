import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index'


storiesOf('Button', module)
    .add('default', () =>
        <Button size={'large'} spaceTwoChars={true}>
            提出
        </Button>
    )
    .add('a', () =>
        <Button href={'https://www.baidu.com'} target={'_blank'}>
            提出
        </Button>
    )
;
