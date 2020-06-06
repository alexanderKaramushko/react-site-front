import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import BlockContainer, { Block } from '..';
import { numberRequestStartAction } from '../../../../actions';

describe('>>>B L O C K --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
    const initialState = { numberCollectionReducer: [0] };
    const mockStore = configureStore();

    let store: MockStoreEnhanced;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <BlockContainer title="Test" />
            </Provider>,
        );
    });

    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(BlockContainer).length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(Block).prop('clicks')).toEqual(
            initialState.numberCollectionReducer,
        );
    });

    it('+++ check action on dispatching ', () => {
        store.dispatch(numberRequestStartAction());
        const action = store.getActions();

        expect(action[0].type).toBe(
            '[0] Request a new number to the NumberGenerator async service.',
        );
    });
});
