import React, { ReactNode } from 'react';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import ListItem from '../../atoms/ListItem/ListItem.container';
import Fade from '../../transitions/Fade/Fade';

import * as styles from './style.scss';

interface Props {
    className?: string;
    dotted?: boolean;
    listItems: {
        link?: string;
        title?: string;
    }[];
    horizontal?: boolean;
}

const defaultProps = {
    listItems: [{}],
};

const UnorderedList: React.FunctionComponent<Props> = (props) => {
    const {
        className, dotted, horizontal, listItems,
    } = props;
    const classProps = classnames(
        styles.unorderedList,
        {
            [styles.dotted]: dotted,
            [styles.horizontal]: horizontal,
        },
        className,
    );

    function renderListItems(listItem: { link?: string; title: string }, index: number): ReactNode {
        const { link, title } = listItem;

        return (
            <ListItem key={index}>
                {link ? (
                    <Link to={link}><Translate value={title} /></Link>
                )
                    : <Translate value={title} />}
            </ListItem>
        );
    }

    return (
        <ul className={classProps}>
            <Fade items={listItems.map(renderListItems)} />
        </ul>
    );
};

UnorderedList.defaultProps = defaultProps;
UnorderedList.displayName = 'UnorderedList';

export default UnorderedList;
