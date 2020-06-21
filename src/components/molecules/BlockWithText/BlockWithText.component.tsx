import React from 'react';
import classnames from 'classnames';
import { Translate } from 'react-redux-i18n';

import Label from '../../atoms/Label/Label.container';

import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

type LabelSize = 'small' | 'medium' | 'large';

interface Props {
    theme?: ThemeType;
    rowReverse?: boolean;
    labelSize?: LabelSize;
    label: string;
    children: React.ReactNode;
}

const defaultProps = {
    children: '',
    label: '',
    labelSize: 'small' as LabelSize,
    rowReverse: false,
    theme: 'light' as ThemeType,
};

const BlockWithText: React.FunctionComponent<Props> = (props) => {
    const {
        children, label, labelSize, rowReverse,
    } = props;
    const labelClassProps = classnames(
        styles.blockWithText,
        {
            [styles.rowReverse]: rowReverse,
        },
    );

    return (
        <div className={labelClassProps}>
            <Label size={labelSize}>
                <Translate value={label} />
            </Label>
            {children}
        </div>
    );
};

BlockWithText.defaultProps = defaultProps;
BlockWithText.displayName = 'BlockWithText';

export default BlockWithText;
