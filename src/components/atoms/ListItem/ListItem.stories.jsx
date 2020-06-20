import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelItem, { ListItemTheme, ListItemSize } from './ListItem.component';

storiesOf('LabelItem', module)
    .add('default', () => (
        <LabelItem>Test ListItem</LabelItem>
    ))
    .add('default - small', () => (
        <LabelItem size={ListItemSize.SMALL}>
            Test ListItem
        </LabelItem>
    ))
    .add('default - medium', () => (
        <LabelItem size={ListItemSize.MEDIUM}>
            Test ListItem
        </LabelItem>
    ))
    .add('default - large', () => (
        <LabelItem size={ListItemSize.LARGE}>
            Test ListItem
        </LabelItem>
    ))
    .add('theme - light', () => (
        <LabelItem theme={ListItemTheme.LIGHT}>
            Test ListItem
        </LabelItem>
    ))
    .add('theme - dark', () => (
        <LabelItem theme={ListItemTheme.DARK}>
            Test ListItem
        </LabelItem>
    ));
