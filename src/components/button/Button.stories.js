import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index'


storiesOf('Button', module)
    .add('default', () =>
        <Button size={"normal"}>
            提出
        </Button>
    )

;
