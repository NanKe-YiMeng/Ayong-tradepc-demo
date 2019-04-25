import { nameSpace } from 'utils/index';

const ns = nameSpace('Page1');
export const ADD_TEXT = ns('ADD_TEXT');

/**
 * Page1 AddText
 * @param {*} text Add Text
 */
export function addText(text) {
    return {
        type: ADD_TEXT,
        data: text,
    };
}
