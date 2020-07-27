import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph, { ParagraphSize, ParagraphTheme } from './Paragraph.component';

storiesOf('Paragraph', module)
    .add('default', () => (
        <Paragraph>Test text</Paragraph>
    ))
    .add('default - small', () => (
        <Paragraph size={ParagraphSize.SMALL}>Test text</Paragraph>
    ))
    .add('default - large', () => (
        <Paragraph size={ParagraphSize.LARGE}>Test text</Paragraph>
    ))
    .add('default - light', () => (
        <Paragraph>Test text</Paragraph>
    ))
    .add('default - dark', () => (
        <Paragraph theme={ParagraphTheme.DARK}>Test text</Paragraph>
    ));
