import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { Props, CardSizes, CardShapes } from './Card.types';
import styles from './style.scss';

const defaultProps = {
    shape: CardShapes.ROUNDED,
    size: CardSizes.MEDIUM,
};

const Card: FC<Props> = (props) => {
    const {
        actions, children, imgSrc, overline, shape, size, theme,
    } = props;
    const classProps = classnames(styles.card, styles[theme], styles[size], styles[shape]);

    return (
        <div className={classProps}>
            <img className={styles.cardImg} src={imgSrc} alt={imgSrc} />
            {overline && (
                <section>
                    <span className={styles.cardOverline}>{overline}</span>
                </section>
            )}
            <article>
                {children}
            </article>
            {actions && (
            <section className={styles.cardFooter}>
                {actions.map((action: ReactNode): ReactNode => (
                    <div className={styles.cardActionWrapper}>{action}</div>
                ))}
            </section>
            )}
        </div>
    );
};

Card.defaultProps = defaultProps;
Card.displayName = 'Card';

export default Card;
