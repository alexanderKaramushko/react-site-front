import * as React from 'react';

import Feature from './components/organisms/Feature';
import Block from './components/molecules/Block';
import * as view from './components/templates/default/style.scss';

const App: React.FunctionComponent = () => {
    console.log(view.hero);
    return (
        <div className={view.default}>
            <Feature
                className={view.hero}
                image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
            >
                <Block title="Atom" button="Learn more">
                    <p>
                        An atom is the smallest constituent unit of ordinary
                        matter that has the properties of a chemical element.
                        Every solid, liquid, gas, and plasma is composed of
                        neutral or ionized atoms. Atoms are very small; typical
                        sizes are around 100 picometers (a ten-billionth of a
                        meter, in the short scale).
                    </p>
                </Block>
            </Feature>
        </div>
    );
};

export default App;
