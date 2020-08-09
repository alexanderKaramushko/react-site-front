import { configure, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withConsole } from '@storybook/addon-console';

import './style.scss';

const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

setDefaults({
    inline: true,
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((story, context) => withInfo(context.kind)(story)(context));
configure(loadStories, module);
