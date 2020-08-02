import React from 'react';
import { storiesOf } from '@storybook/react';
import { Themes } from '../../../common/settings';
import { ButtonSizes, ButtonShapes } from './Button.types';
import Button from './Button.component';

storiesOf('Button', module)
    .add('default', () => (
        <Button>Test Button</Button>
    ))
    .add('default - small', () => (
        <Button size={ButtonSizes.SMALL}>
            Test Button
        </Button>
    ))
    .add('default - medium', () => (
        <Button size={ButtonSizes.MEDIUM}>
            Test Button
        </Button>
    ))
    .add('default - large', () => (
        <Button size={ButtonSizes.LARGE}>
            Test Button
        </Button>
    ))
    .add('shape - round', () => (
        <Button shape={ButtonShapes.ROUNDED}>
            Test Button
        </Button>
    ))
    .add('shape - straight', () => (
        <Button shape={ButtonShapes.STRAIGHT}>
            Test Button
        </Button>
    ))
    .add('theme - light', () => (
        <Button theme={Themes.LIGHT}>
            Test Button
        </Button>
    ))
    .add('theme - dark', () => (
        <Button theme={Themes.DARK}>
            Test Button
        </Button>
    ));
