import React from 'react';
import { storiesOf } from '@storybook/react';
import Label, { LabelSize, LabelTheme } from './Label.component';

storiesOf('Label', module)
    .add('default', () => (
        <Label>Test label</Label>
    ))
    .add('default - small', () => (
        <Label size={LabelSize.SMALL}>
            Test label
        </Label>
    ))
    .add('default - medium', () => (
        <Label size={LabelSize.MEDIUM}>
            Test label
        </Label>
    ))
    .add('default - large', () => (
        <Label size={LabelSize.LARGE}>
            Test label
        </Label>
    ))
    .add('theme - light', () => (
        <Label theme={LabelTheme.LIGHT}>
            Test label
        </Label>
    ))
    .add('theme - dark', () => (
        <Label theme={LabelTheme.DARK}>
            Test label
        </Label>
    ));
