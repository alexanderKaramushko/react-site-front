import React from 'react';
import classnames from 'classnames';
import { Translate } from 'react-redux-i18n';
import Label from '../../atoms/Label/Label.container';
import { Themes } from '../../../common/settings';
import Fade from '../../transitions/Fade/Fade';
import { LabelSize, Props } from './BlockWithText.types';
import * as styles from './style.scss';

const defaultProps = {
    children: '',
    label: '',
    labelSize: LabelSize.SMALL,
    rowReverse: false,
    theme: Themes.LIGHT,
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
        <Fade>
            <div className={labelClassProps}>
                <Label size={labelSize}>
                    <Translate value={label} />
                </Label>
                {children}
            </div>
        </Fade>
    );
};

BlockWithText.defaultProps = defaultProps;
BlockWithText.displayName = 'BlockWithText';

export default BlockWithText;
