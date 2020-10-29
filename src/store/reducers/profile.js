import * as actionTypes from '../types';
import { updateState } from './state';

const initialState = {
    resumeData: null,
};
const reducer = (state = initialState, { data, type }) => {
    switch (type) {

        case actionTypes.PROFILE_LOADED: {
            return updateState(state, {
                resumeData: data,
            });
        }

        default:
            return state;
    }
};
export default reducer;


