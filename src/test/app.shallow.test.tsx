import { expect } from 'chai';
import shallowRender from './shallowRender';
import App from '../App';

describe('Shallow Rendering', () => {
    it("App's title type should be h1", () => {
        const app = shallowRender(App).toJSON();
        expect(app[0].type).to.equal('h1');
    });
});
