import React from 'react';
import {storiesOf} from '@storybook/react';
import TextRow from "./textrow/TextRow";

storiesOf('TextRow', module)
    .add('normal', () =>
        <TextRow>
        </TextRow>
    );
