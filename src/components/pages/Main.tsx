import React from 'react';
import Feature from '../organisms/Feature';
import BlockContainer from '../molecules/Block';
import view from '../templates/default/style.scss';

import '../_settings/_base.scss';

const Main: React.FunctionComponent = () => (
    <>
        <h1>Test</h1>
        <Feature
            className={view.hero}
            image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
        >
            <BlockContainer title="Atom" button="Learn more">
                <p>
                    An atom is the smallest constituent unit of ordinary
                    matter that has the properties of a chemical element.
                    Every solid, liquid, gas, and plasma is composed of
                    neutral or ionized atoms. Atoms are very small; typical
                    sizes are around 100 picometers (a ten-billionth of a
                    meter, in the short scale).
                </p>
            </BlockContainer>
        </Feature>
    </>
);

export default Main;
