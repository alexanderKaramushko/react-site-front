import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../_settings/_base.scss';
import * as template from '../../templates/default/style.scss';
import styles from './style.scss';
import ErrorHandler from '../../Errors/ErrorHandler/ErrorHandler.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.component';
import Button from '../../atoms/Button/Button.container';
import { Clickable } from '../../atoms/Clickable/Clickable.component';

const Main: FC = () => {
    const [visible, setVisible] = useState(false);

    function handlePathOpen(): void {
        setVisible(true);
    }

    return (
        <section
            className={template.wrap}
        >
            <ErrorHandler>
                <h1>Главная</h1>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Paragraph>
                <Clickable>
                    <Button onClick={handlePathOpen}>Button</Button>
                </Clickable>
                <CSSTransition
                    classNames={{ ...styles }}
                    in={visible}
                    timeout={500}
                    mountOnEnter
                >
                    <div>TEST</div>
                </CSSTransition>
            </ErrorHandler>
        </section>
    );
};

export default Main;
