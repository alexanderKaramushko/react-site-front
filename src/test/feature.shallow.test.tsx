import { expect } from 'chai';
import Feature from '../components/organisms/Feature';
import shallowRender from './shallowRender';

describe('Shallow Rendering', () => {
    it('Feature should accept props and call component with them', () => {
        const featureData = {
            className: 'test-class',
            image:
                'https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg',
        };
        const feature = shallowRender(Feature, { props: featureData }).toTree();

        expect(feature.props.props.className).to.equal(featureData.className);
        expect(feature.props.props.image).to.equal(featureData.image);
    });
});
