import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, Form, Select, DatePicker, Input, Button, Pagination } from 'qnui';

import * as Actions from '../../../actions/toolbar/index';
import * as AuditStatus from '../../../constants/AuditStatus';
import './index.scss';

/**
 * @author WangC
 * Toolbar Message Audit Manager
 */
class Toolbar extends React.Component {
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
        const { auditStatus, timePicker, nameInput, pageCurrent } = this.props;
        const { statusChange, timeChange, nameChange, pageCurrentChange } = this.props;
        return (
            <div className="tool_bar">
                <div className="tool_bar_left">
                    <Form direction="hoz" className="demo-ctl" field={this.field}>
                        <span>审核状态</span>
                        <Select {...init('status', {
                            initValue: auditStatus,
                            props: { onChange: () => { statusChange(this.field.getValue('status')); } },
                        })}
                        >
                            <Select.Option value={AuditStatus.STATUS_ALL}>全部状态</Select.Option>
                            <Select.Option value={AuditStatus.STATUS_REVIEW}>审核中</Select.Option>
                            <Select.Option value={AuditStatus.STATUS_PASS}>审核通过</Select.Option>
                        </Select>
                        <RangePicker {...init('time', {
                            initValue: timePicker,
                            props: {
                                onChange: () => {
                                    timeChange(this.field.getValue('time'));
                                },
                            },
                        })}
                        />
                        <Input
                            {...init('username', { initValue: nameInput })}
                            placeholder="请输入卖家旺旺"
                        />
                        <Button onClick={() => { nameChange(this.field.getValue('username')); }}>
                            查询
                        </Button>
                    </Form>
                </div>
                <div className="tool_bar_right">
                    <Pagination
                        style={{ float: 'right' }}
                        current={pageCurrent}
                        type="simple"
                        total={20}
                        pageSize={5}
                        onChange={(current) => { pageCurrentChange(current); }}
                    />
                </div>
            </div>
        );
    }
}

Toolbar.propTypes = {
    auditStatus: PropTypes.string.isRequired,
    timePicker: PropTypes.arrayOf(PropTypes.object).isRequired,
    nameInput: PropTypes.string.isRequired,
    pageCurrent: PropTypes.number.isRequired,
    statusChange: PropTypes.func.isRequired,
    timeChange: PropTypes.func.isRequired,
    nameChange: PropTypes.func.isRequired,
    pageCurrentChange: PropTypes.func.isRequired,
};

export default connect(
    state => state.ToolBar,
    dispatch => ({
        statusChange: status => dispatch(Actions.StatusChange(status)),
        timeChange: times => dispatch(Actions.TimeChange(times)),
        nameChange: name => dispatch(Actions.NameChange(name)),
        pageCurrentChange: pageCurrent => dispatch(Actions.PageCurrentChange(pageCurrent)),
    }),
)(Toolbar);
