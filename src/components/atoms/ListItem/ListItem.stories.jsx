import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelItem, { ListItemSize } from './ListItem.component';
import { Themes } from '../../../common/settings';

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
        <LabelItem theme={Themes.LIGHT}>
            Test ListItem
        </LabelItem>
    ))
    .add('theme - dark', () => (
        <LabelItem theme={Themes.DARK}>
            Test ListItem
        </LabelItem>
    ));
