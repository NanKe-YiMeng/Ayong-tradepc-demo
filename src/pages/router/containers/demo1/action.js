

import { ajax, nameSpace } from 'utils/index';


const ns = nameSpace('Demo1');
export const CLICK_DEMO = ns('CLICK_DEMO');

/**
 * Page Action
 * Click Demo
 */
export function clickDemo() {
    return (dispatch, getState) => {
        // console.log(getState());
        const { counter } = getState().Demo1;
        ajax({
            api: 'page2List',
            method: 'GET',
        }, () => {
            // ajax请求成功
            dispatch({
                type: CLICK_DEMO,
                data: { counter: counter + 1 },
            });
        }, () => {
            // ajax请求失败
        });
    };
}
