import React, { FC } from 'react';
import '../_settings/_base.scss';
import * as styles from '../templates/default/style.scss';
import ErrorHandler from '../Errors/ErrorHandler/ErrorHandler.component';
import Paragraph from '../atoms/Paragraph/Paragraph.component';
import Button from '../atoms/Button/Button.container';
import { Clickable } from '../atoms/Clickable/Clickable.component';

const Main: FC = () => (
    <section
        className={styles.wrap}
    >
        <ErrorHandler>
            <h1>Главная</h1>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Paragraph>
            <Clickable>
                <Button>Button</Button>
            </Clickable>
        </ErrorHandler>
    </section>
);

export default Main;
