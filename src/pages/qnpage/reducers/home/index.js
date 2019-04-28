import * as Action from '../../actions/home';
// 对页面prop 数据进行管理
const initialState = { text: '' };
/**
 * The Hoem Reducer
 * @param {*} state Redux Store State
 */
export default function index(state = initialState, action) {
    switch (action.type) {
    case Action.GET_DATA:
        return Object.assign({}, state, { text: action.data });
    default:
        return state;
    }
}
