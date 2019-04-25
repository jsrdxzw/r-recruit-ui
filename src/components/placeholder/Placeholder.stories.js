import React from 'react';
import {storiesOf} from '@storybook/react';
import TextRow from "./TextRow";
import TextRowDashed from './TextRowDashed'

storiesOf('Placeholder', module)
    .add('TextRow', () =>
        <TextRow/>
    )
    .add('TextRowDashed',()=>
        <TextRowDashed/>
    )
;
