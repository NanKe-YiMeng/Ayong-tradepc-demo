import * as ActionTypes from '../../constants/TableDataStatus';
// 对页面prop 数据进行管理
const initialState = { data: [] };

/**
 * TableData Reducer
 * @param {*} state TableData Reducer State
 * @param {*} action TableData Reducer Action
 */
export default function index(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.DATA_LOADING:
        return Object.assign({}, state, []);
    case ActionTypes.DATA_LOADING_SUCCESS:
        return Object.assign({}, state, action.data);
    case ActionTypes.DATA_LOADING_ERROR:
        return Object.assign({}, state, []);
    default:
        return state;
    }
}
