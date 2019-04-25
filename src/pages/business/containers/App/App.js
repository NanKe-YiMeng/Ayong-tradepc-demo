import React from 'react';
import { Tab } from 'qnui';
import { connect } from 'react-redux';
import MsgAudit from '../MsgAudit';

import './App.scss';

const tabs = [
    { tab: '短信审核', key: 'message_audit', component: <MsgAudit /> },
    { tab: '发送记录', key: 'send_record', component: '这里是 发送记录 内容' },
    { tab: '手动返还记录', key: 'manual_return', component: '这里是 手动返还记录 内容' },
    { tab: '自动返还记录', key: 'auto_return', component: '这里是 自动返还记录 内容' },
    { tab: '订购记录', key: 'order_record', component: '这里是 订购记录 内容' },
    { tab: '通知短信', key: 'notifi_message', component: '这里是 通知短信 内容' },
];
/**
 * @author WangC
 * Business Component
 * 商家业务模块
 */
const Business = () => (
    <div>
        <Tab className="content_tab">
            {tabs.map(item => <Tab.TabPane key={item.key} tab={item.tab}>{item.component}</Tab.TabPane>)}
        </Tab>
    </div>
);
export default connect()(Business);
