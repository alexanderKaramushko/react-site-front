import React from 'react';
import { storiesOf } from '@storybook/react';
import { StepperSizes, Statuses } from './Stepper.types';
import Stepper from './Stepper.component';

const steps = [
    {
        status: Statuses.PROCESS,
    },
    {
        status: Statuses.WAIT,
    },
    {
        status: Statuses.WAIT,
    },
    {
        status: Statuses.WAIT,
    },
];
const contentNodes = [
    <div>
        <h2>Step 1</h2>
        <p>Bla bla bla 1</p>
    </div>,
    <div>
        <h2>Step 2</h2>
        <p>Bla bla bla 2</p>
    </div>,
    <div>
        <h2>Step 3</h2>
        <p>Bla bla bla 3</p>
    </div>,
    <div>
        <h2>Step 3</h2>
        <p>Bla bla bla 3</p>
    </div>,
];

storiesOf('Stepper', module)
    .add('default', () => (
        <Stepper steps={steps} contentNodes={contentNodes}>Test Stepper</Stepper>
    ))
    .add('default - small', () => (
        <Stepper steps={steps} contentNodes={contentNodes} size={StepperSizes.SMALL}>
            Test Stepper
        </Stepper>
    ));
