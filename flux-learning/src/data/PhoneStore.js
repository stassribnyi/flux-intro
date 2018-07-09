import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import ActionTypes from './ActionTypes.js';
import PhonesDispatcher from './PhonesDispatcher.js';

class PhoneStore extends ReduceStore {
    constructor() {
        super(PhonesDispatcher);
    }

    getInitialState() {
        return Immutable.List.of('IPhone X', 'Google Pixel 3', 'Huawei P20 Pro');
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return state.push(action.text);
                }

                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (~index) {
                    return state.delete(index);
                }

                return state;
            default:
                return state;
        }
    }
}

export default new PhoneStore();