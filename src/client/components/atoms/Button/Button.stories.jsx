import React from 'react';
import { storiesOf } from '@storybook/react';
import { Variants } from './Button.types';
import Button from './Button';
import { Sizes } from '../../../common/UITypes';

storiesOf('Button', module)
    .add('default', () => (
        <Button>Test Button</Button>
    ))
    .add('default - small', () => (
        <Button size={Sizes.SMALL}>
            Test Button
        </Button>
    ))
    .add('default - medium', () => (
        <Button size={Sizes.MEDIUM}>
            Test Button
        </Button>
    ))
    .add('default - large', () => (
        <Button size={Sizes.LARGE}>
            Test Button
        </Button>
    ))
    .add('variants - text', () => (
        <Button variant={Variants.TEXT}>
            Test Button
        </Button>
    ))
    .add('variants - contained', () => (
        <Button variant={Variants.CONTAINED}>
            Test Button
        </Button>
    ))
    .add('variants - outlined', () => (
        <Button variant={Variants.OUTLINED}>
            Test Button
        </Button>
    ));
