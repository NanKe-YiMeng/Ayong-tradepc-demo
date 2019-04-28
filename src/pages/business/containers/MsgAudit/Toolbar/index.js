import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, Select, DatePicker, Input, Button, Pagination } from 'qnui';

import * as Actions from '../../../actions/toolbar/index';
import * as AuditStatus from '../../../constants/AuditStatus';
import * as ActionType from '../../../constants/ActionType';
import './index.scss';

/**
 * @author WangC
 * Toolbar Message Audit Manager
 */
class Toolbar extends React.Component {
    static propTypes = {
        auditStatus: PropTypes.string.isRequired,
        timePicker: PropTypes.arrayOf(PropTypes.object).isRequired,
        nameInput: PropTypes.string.isRequired,
        pageCounts: PropTypes.number.isRequired,
        pageCurrent: PropTypes.number.isRequired,
        statusChange: PropTypes.func.isRequired,
        timeChange: PropTypes.func.isRequired,
        nameChange: PropTypes.func.isRequired,
        pageCurrentChange: PropTypes.func.isRequired,
    }

    /**
     * Toolbar Constructor
     * @param {*} props this.props
     */
    constructor(props) {
        super(props);
        this.field = new Field(this);
    }

    /**
     * Render()
     */
    render() {
        const { init } = this.field;
        const { RangePicker } = DatePicker;

        const { auditStatus, timePicker, nameInput, pageCounts, pageCurrent } = this.props;
        const { statusChange, timeChange, nameChange, pageCurrentChange } = this.props;
        return (
            <div className="tool_bar">
                <div className="tool_bar_left">
                    <span className="item">审核状态</span>
                    <Select
                        className="item special"
                        value={auditStatus}
                        onChange={(value) => { statusChange(value); }}
                    >
                        <Select.Option value={AuditStatus.STATUS_ALL}>全部状态</Select.Option>
                        <Select.Option value={AuditStatus.STATUS_REVIEW}>审核中</Select.Option>
                        <Select.Option value={AuditStatus.STATUS_PASS}>审核通过</Select.Option>
                        <Select.Option value={AuditStatus.STATUS_REJECT}>拒绝审核</Select.Option>
                    </Select>
                    <RangePicker
                        className="item"
                        value={timePicker}
                        onChange={(value) => { timeChange(value); }}
                    />
                    <Input
                        className="item"
                        {...init('username', { initValue: nameInput })}
                        placeholder="请输入卖家旺旺"
                    />
                    <Button
                        className="item"
                        onClick={() => { nameChange(this.field.getValue('username')); }}
                    >
                        查询
                    </Button>
                </div>
                <div className="tool_bar_right">
                    <Pagination
                        style={{ float: 'right' }}
                        current={pageCurrent}
                        type="simple"
                        total={pageCounts}
                        pageSize={ActionType.PAGE_SIZE}
                        onChange={(current) => { pageCurrentChange(current); }}
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.ToolBar,
    dispatch => ({
        statusChange: status => dispatch(Actions.StatusChange(status)),
        timeChange: times => dispatch(Actions.TimeChange(times)),
        nameChange: name => dispatch(Actions.NameChange(name)),
        pageCurrentChange: pageCurrent => dispatch(Actions.PageCurrentChange(pageCurrent)),
    }),
)(Toolbar);
