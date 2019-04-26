import * as ActionType from '../../constants/ActionType';

/**
 * Status Change
 * Message Status Change Action
 * @param {*} status Toolbar message audit Status
 */
export function StatusChange(status) {
    return { type: ActionType.STATUS_CHANGE, status };
}

/**
 * Time Change
 * Time picker data change
 * @param {*} times Toolbar time picker
 */
export function TimeChange(times) {
    return { type: ActionType.TIME_CHANGE, times };
}

/**
 * Name Change
 * Name Input data change
 * @param {*} name Toolbar name input
 */
export function NameChange(name) {
    return { type: ActionType.NAME_CHANGE, name };
}

/**
 * Page Current Change
 * 页面分页页码改变
 * @param {*} pageCurrent 页面内容 分页页码
 */
export function PageCurrentChange(pageCurrent) {
    return { type: ActionType.PAGE_CURRENT_CHANGE, pageCurrent };
}
