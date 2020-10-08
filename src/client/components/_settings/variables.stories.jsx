import React from 'react';
import { storiesOf } from '@storybook/react';
import classnames from 'classnames';
import * as variables from './stories.scss';

const Vars = Object.keys(variables).map((color) => {
    const classProps = classnames(variables.colors, variables[color]);

    return <p className={classProps}>{color}</p>;
});

storiesOf('— Variables', module).add('Examples', () => <div>{Vars}</div>);
