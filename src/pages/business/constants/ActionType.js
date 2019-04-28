import { nameSpace } from 'utils/index';

const ns = nameSpace('ACTION_TYPE');

// toolbar 组件状态改变 Action Type
export const STATUS_CHANGE = ns('STATUS_CHANGE');
export const TIME_CHANGE = ns('TIME_CHANGE');
export const NAME_CHANGE = ns('NAME_CHANGE');
export const PAGE_COUNTS_CHANGE = ns('PAGE_COUNTS_CHANGE');
export const PAGE_CURRENT_CHANGE = ns('PAGE_CURRENT_CHANGE');

/**
 * Page Size Const
 */
export const PAGE_SIZE = 10;
