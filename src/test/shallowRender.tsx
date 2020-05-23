import React from 'react';
import TestRenderer from 'react-test-renderer';

function shallowRender(
    Component: React.ComponentType,
    componentProps?: any,
): any {
    const renderer = TestRenderer.create(<Component {...componentProps} />);
    return renderer;
}

export default shallowRender;
