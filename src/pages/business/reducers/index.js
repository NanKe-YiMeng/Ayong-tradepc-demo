import { combineReducers } from 'redux';
import ToolBar from './toolbar/index';
import TableData from './tableData/index';

const rootReducer = combineReducers({ ToolBar, TableData });

export default rootReducer;
