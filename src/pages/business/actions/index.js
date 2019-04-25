import { ajax, nameSpace } from 'utils/index';

const ns = nameSpace('Index');
export const GET_LIST_SUCCESS = ns('GET_LIST_SUCCESS');

/**
 * Business Action
 * @param {*} counter Counter
 * @param {*} sucCallback success callback
 * @param {*} failCallback fail callback
 */
export function getList(counter, sucCallback, failCallback) {
    return (dispatch) => {
        // 接收到数据
        ajax({
            api: 'messages',
            method: 'get',
        }, (json) => {
            dispatch({
                type: GET_LIST_SUCCESS,
                data: {
                    list: json.data,
                    counter,
                },
            });
            sucCallback(json);
        }, (json) => {
            failCallback(json);
        });
    };
}
