import * as actions from './action';

// 对页面prop 数据进行管理
const initialState = { counter: 0 };
const defaultAction = { type: 'doNothing' };

/**
 * Demo1 Reducers
 * @param {*} state Reducer state
 * @param {*} action Reducer Action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case actions.CLICK_DEMO:
        return Object.assign({}, state, { counter: action.data.counter });
    default:
        return state;
    }
}
