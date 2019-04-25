import * as actions from '../../actions/page1';

// 对页面prop 数据进行管理
const initialState = { list: ['默认文本'] };
const defaultAction = { type: 'doNothing' };
/**
 * Page1 Reducers
 * @param {*} state Redux State
 * @param {*} action Redux Action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case actions.ADD_TEXT:
        return Object.assign({}, state, { list: [action.data, ...state.list] });

    default:
        return state;
    }
}
