import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Alert from './index'


storiesOf('Alert', module)
    .add('alert-closable', () => (
            <Alert closable onClose={()=>action('关闭了弹出窗口')}>测试弹出框</Alert>
        )
    )
    .add('alert-error', () =>
        <Alert type={'error'}>测试错误弹出框</Alert>
    )
;
