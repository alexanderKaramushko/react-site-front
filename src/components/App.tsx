import * as React from 'react';

import '../styles/App.scss';
import HelloContainer from './containers/HelloContainer';

class App extends React.Component {
    render() {
        return <HelloContainer message="World!" />;
    }
}

export default App;
