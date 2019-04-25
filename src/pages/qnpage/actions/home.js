// constants 与 actions 在一起
import { nameSpace } from 'utils/index';

const ns = nameSpace('HOME');
export const GET_DATA = ns('GET_DATA');

/**
 * Home Action
 * getData() 方法，获取数据
 */
export function getData() {
    return (dispatch) => {
        dispatch({
            type: GET_DATA,
            data: 'home',
        });
    };
}
