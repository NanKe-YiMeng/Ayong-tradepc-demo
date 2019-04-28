import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TableDataActions from '../../../actions/tableData/index';
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
        getData: PropTypes.func.isRequired,
    }

    /**
     * Constructor
     * init Data
     */
    constructor(props) {
        super(props);
        const { getData } = this.props;
        getData();
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
                    <td>{item.times}</td>
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


// TODO: clear eslint disable
/* eslint-disable */
/**
 * 获取过滤后的数据
 * @param {*} dataList 原有数据
 * @param {*} filter 数据过滤
 */
function getFilterData(dataList, filter) {
    return dataList;
}
/* eslint-enable */

export default connect(
    state => ({
        showDataList: getFilterData(state.TableData.dataList, state.ToolBar),
        loadingStatus: state.TableData.loadingStatus,
    }),
    dispatch => ({ getData: bindActionCreators(TableDataActions, dispatch) }),
)(MsgTable);
