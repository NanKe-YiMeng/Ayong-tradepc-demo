import { ajax, nameSpace } from 'utils/index';

const ns = nameSpace('Page2');
export const GET_LIST_REQUEST = ns('GET_LIST_REQUEST');
export const GET_LIST_SUCCESS = ns('GET_LIST_SUCCESS');
export const GET_LIST_FAILED = ns('GET_LIST_FAILED');

/**
 * Page2 Action GetData
 * @param {*} data GetList Data
 */
export function getList(data) {
    return (dispatch) => {
        // 发送请求前
        dispatch({
            type: GET_LIST_REQUEST,
            data,
        });

        // 接收到数据
        ajax({
            api: 'page2List',
            method: 'get',
        }).then(
            (json) => {
                // 成功后
                dispatch({
                    type: GET_LIST_SUCCESS,
                    data: json.data,
                });
            },
            (json) => {
                // 失败后
                dispatch({
                    type: GET_LIST_FAILED,
                    data: json,
                });
            },
        );
    };
}
