import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonTheme, ButtonSize } from '.';

storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Learn more</Button>
    ))
    .add('default - small', () => (
        <Button size={ButtonSize.SMALL} onClick={action('clicked')}>
            Learn more
        </Button>
    ))
    .add('default - medium', () => (
        <Button size={ButtonSize.MEDIUM} onClick={action('clicked')}>
            Learn more
        </Button>
    ))
    .add('default - large', () => (
        <Button size={ButtonSize.LARGE} onClick={action('clicked')}>
            Learn more
        </Button>
    ))
    .add('rounded', () => (
        <Button theme={ButtonTheme.ROUNDED} onClick={action('clicked')}>
            Learn more
        </Button>
    ))
    .add('disabled', () => (
        <Button
            // eslint-disable-next-line react/jsx-indent-props
            theme={ButtonTheme.ROUNDED}
            // eslint-disable-next-line react/jsx-indent-props
            disabled
            // eslint-disable-next-line react/jsx-indent-props
            onClick={action('clicked')}
        >
            Learn more
        </Button>
    ));
