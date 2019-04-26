import { ajax } from 'utils/index';
import * as LoadingType from '../../constants/TableDataStatus';

/**
 * Business Action
 * @param {*} counter Counter
 * @param {*} sucCallback success callback
 * @param {*} failCallback fail callback
 */
export default function tableData(sucCallback, failCallback) {
    return (dispatch) => {
        // 接收数据中
        dispatch({ type: LoadingType.DATA_LOADING });
        ajax({
            api: 'messages',
            method: 'get',
        }, (json) => {
            dispatch({
                type: LoadingType.DATA_LOADING_SUCCESS,
                data: { list: json.data },
            });
            sucCallback(json);
        }, (json) => {
            dispatch({ type: LoadingType.DATA_LOADING_ERROR });
            failCallback(json);
        });
    };
}
