import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TableDataActions from '../../../actions/tableData/index';
import * as ActionType from '../../../constants/ActionType';
import * as AuditStatus from '../../../constants/AuditStatus';
import './index.scss';
/**
 * Msg Table
 * 信息审核数据表格
 * @author WangC
 */
class MsgTable extends React.Component {
    static propTypes = {
        showDataList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        loadingStatus: PropTypes.bool.isRequired,
        tableData: PropTypes.func.isRequired,
    }

    /**
     * Constructor
     * init Data
     */
    constructor(props) {
        super(props);
        const { tableData } = this.props;
        tableData();
    }

    /**
     * Render()
     */
    render() {
        const { showDataList, loadingStatus } = this.props;
        const data = [];
        if (!loadingStatus) {
            return (<div>正在加载</div>);
        }
        showDataList.forEach((item) => {
            data.push(
                <tr key={item.id}>
                    <td>{new Date(item.times).toLocaleString()}</td>
                    <td>{item.namenick}</td>
                    <td>{item.content}</td>
                    <td>{item.sendType}</td>
                    <td>{item.auditStatus}</td>
                    <td>{item.auditer}</td>
                    <td>-</td>
                </tr>,
            );
        });

        return (
            <div className="div_table">
                <table className="table_head">
                    <thead>
                        <tr>
                            <th>提交时间</th>
                            <th>买家nick</th>
                            <th>短信内容</th>
                            <th>类型</th>
                            <th>状态</th>
                            <th>审核人</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        );
    }
}

/**
 * 获取过滤后的数据
 * @param {*} dataList 原有数据
 * @param {*} filter 数据过滤
 */
function getFilterData(dataList, filter) {
    let result = dataList.map(item => item);
    result = result.filter(item => filter.auditStatus === AuditStatus.STATUS_ALL || item.auditStatus === filter.auditStatus);
    result = result.filter((item) => {
        const time = new Date(item.times);
        if ((filter.timePicker[0] === null && filter.timePicker[1] === null) || filter.timePicker.length !== 2) {
            return true;
        }
        return time >= filter.timePicker[0] && time <= filter.timePicker[1];
    });
    result = result.filter((item) => {
        if (filter.nameInput === '') {
            return true;
        }
        return item.namenick.indexOf(filter.nameInput) !== -1;
    });
    return result.splice((filter.pageCurrent - 1) * ActionType.PAGE_SIZE, ActionType.PAGE_SIZE);
}

export default connect(
    state => ({
        showDataList: getFilterData(state.TableData.dataList, state.ToolBar),
        loadingStatus: state.TableData.loadingStatus,
    }),
    dispatch => ({ tableData: bindActionCreators(TableDataActions, dispatch) }),
)(MsgTable);
