import { ajax } from 'utils/index';
import * as LoadingType from '../../constants/TableDataStatus';
import * as ActionType from '../../constants/ActionType';

/**
 * Business Action
 * @param {*} counter Counter
 * @param {*} sucCallback success callback
 * @param {*} failCallback fail callback
 */
export default function tableData() {
    return (dispatch) => {
        // 接收数据中
        dispatch({ type: LoadingType.DATA_LOADING });
        ajax({
            api: 'messages',
            method: 'get',
        }, (json) => {
            const pageCounts = json.data.list.length;
            // 数据获取成功
            dispatch({
                type: LoadingType.DATA_LOADING_SUCCESS,
                data: { list: json.data.list },
            });
            // 修改页面总数, 当页面总数发生变化时, 页面 跳转到第一页
            dispatch({
                type: ActionType.PAGE_COUNTS_CHANGE,
                data: { pageCounts, pageCurrent: 1 },
            });
        }, () => {
            // 数据 获取失败
            dispatch({ type: LoadingType.DATA_LOADING_ERROR });
        });
    };
}
