import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from './index'


storiesOf('Card', module)
    .add('normal', () =>
        <Card title={'Recruit card'} type={'normal'}>
                <div>Im card in the body</div>
        </Card>
    )
    .add('nested', () =>
        <Card title={'Recruit card'} type={'nested'}>
                <div>Im card in the body</div>
        </Card>
    );
