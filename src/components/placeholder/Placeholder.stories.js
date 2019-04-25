import React from 'react';
import {storiesOf} from '@storybook/react';
import TextRow from "./TextRow";
import TextRowDashed from './TextRowDashed'
import TextBlock from "./TextBlock";

storiesOf('Placeholder', module)
    .add('TextRow', () =>
        <TextRow/>
    )
    .add('TextRowDashed', () =>
        <TextRowDashed/>
    )
    .add('TextBlock', () =>
        <TextBlock rows={5}/>
    )
;
