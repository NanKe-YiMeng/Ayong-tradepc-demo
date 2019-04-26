import * as ActionType from '../../constants/ActionType';
import * as AuditStatus from '../../constants/AuditStatus';

/**
 * Initial State
 * 初始化 Redux 数据
 */
const initialState = {
    auditStatus: AuditStatus.STATUS_ALL,
    timePicker: [],
    nameInput: '',
    pageCurrent: 1,
};

/**
 * Toolbar Reducer
 * @param {*} state Reducer State
 * @param {*} action Reducer Action
 */
export default function Toolbar(state = initialState, action) {
    switch (action.type) {
    case ActionType.STATUS_CHANGE:
        return Object.assign({}, state, { auditStatus: action.status });
    case ActionType.TIME_CHANGE:
        return Object.assign({}, state, { timePicker: action.times });
    case ActionType.NAME_CHANGE:
        return Object.assign({}, state, { nameInput: action.name });
    case ActionType.PAGE_CURRENT_CHANGE:
        return Object.assign({}, state, { pageCurrent: action.pageCurrent });
    default:
        return state;
    }
}
