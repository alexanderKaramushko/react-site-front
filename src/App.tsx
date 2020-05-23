import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Feature from './components/organisms/Feature';
import BlockContainer from './components/molecules/Block';
import view from './components/templates/default/style.scss';

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
