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
    pageCounts: 0,
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
        return { ...state, auditStatus: action.status };
    case ActionType.TIME_CHANGE:
        return { ...state, timePicker: action.times };
    case ActionType.NAME_CHANGE:
        return { ...state, nameInput: action.name };
    case ActionType.PAGE_COUNTS_CHANGE:
        return { ...state, pageCounts: action.data.pageCounts, pageCurrent: action.data.pageCurrent };
    case ActionType.PAGE_CURRENT_CHANGE:
        return { ...state, pageCurrent: action.pageCurrent };
    default:
        return state;
    }
}
