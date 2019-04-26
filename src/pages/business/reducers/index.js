import { combineReducers } from 'redux';
import ToolBar from './toolbar/index';
import TableData from './tableData/index';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({ ToolBar, TableData });

export default rootReducer;
