import * as ActionTypes from '../../constants/TableDataStatus';
// 对页面prop 数据进行管理
const initialState = {
    loadingStatus: false,
    dataList: [],
};

/**
 * TableData Reducer
 * @param {*} state TableData Reducer State
 * @param {*} action TableData Reducer Action
 */
export default function index(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.DATA_LOADING:
        return { ...state, dataList: [], loadingStatus: false };
    case ActionTypes.DATA_LOADING_SUCCESS:
        return { ...state, dataList: action.data.list, loadingStatus: true };
    case ActionTypes.DATA_LOADING_ERROR:
        return { ...state, dateList: [], loadingStatus: false };
    default:
        return state;
    }
}
