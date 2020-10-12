import React, { FC, ReactNode } from 'react';
import template from '../templates/default/style.scss';
import ErrorHandler from '../Errors/ErrorHandler/ErrorHandler.component';
import Paragraph from '../atoms/Paragraph/Paragraph.component';
import Button from '../atoms/Button/Button';
import { Clickable } from '../atoms/Clickable/Clickable.component';
import Stepper from '../molecules/Stepper/Stepper.component';
import Card from '../molecules/Card/Card.container';
import { Variants } from '../atoms/Button/Button.types';
import Replace from '../transitions/Replace/Replace';
import { Sizes } from '../../common/UITypes';

const Main: FC = () => (
    <section
        className={template.wrap}
    >
        <div className={template.default}>
            <ErrorHandler>
                <div>
                    <h1>Главная</h1>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Paragraph>
                    <Clickable>
                        <Button variant={Variants.OUTLINED}>Button</Button>
                    </Clickable>
                </div>
                <Replace
                    renderToggleIn={(handleToggle: () => void): ReactNode => (
                        <Stepper
                            steps={[
                                {
                                    status: 'process',
                                },
                                {
                                    status: 'wait',
                                },
                                {
                                    status: 'wait',
                                },
                                {
                                    status: 'wait',
                                },
                            ]}
                            contentNodes={[
                                <div>
                                    <h2>Step 1</h2>
                                    <p>Bla bla bla 1</p>
                                </div>,
                                <div>
                                    <h2>Step 2</h2>
                                    <p>Bla bla bla 2</p>
                                </div>,
                                <div>
                                    <h2>Step 3</h2>
                                    <p>Bla bla bla 3</p>
                                </div>,
                                <div>
                                    <h2>Step 3</h2>
                                    <p>Bla bla bla 3</p>
                                </div>,
                            ]}
                            onFinish={handleToggle}
                        />
                    )}
                    togglesOut={[
                        <Card
                        // imgSrc="https://cdn.quasar.dev/img/parallax2.jpg"
                            overline="Overline"
                            actions={[
                                <Button size={Sizes.SMALL}>Action 1</Button>,
                                <Button size={Sizes.SMALL}>Action 2</Button>,
                            ]}
                        >
                            Card
                        </Card>,
                        <Card
                        // imgSrc="https://cdn.quasar.dev/img/parallax2.jpg"
                            overline="Overline"
                            actions={[
                                <Button size={Sizes.SMALL}>Action 1</Button>,
                                <Button size={Sizes.SMALL}>Action 2</Button>,
                            ]}
                        >
                            Card
                        </Card>,
                        <Card
                        // imgSrc="https://cdn.quasar.dev/img/parallax2.jpg"
                            overline="Overline"
                            actions={[
                                <Button size={Sizes.SMALL}>Action 1</Button>,
                                <Button size={Sizes.SMALL}>Action 2</Button>,
                            ]}
                        >
                            Card
                        </Card>,
                    ]}
                />
            </ErrorHandler>
        </div>
    </section>
);

export default Main;
