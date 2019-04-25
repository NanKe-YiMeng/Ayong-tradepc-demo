import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Badge } from 'qnui';
// import * as actions from '../../actions/home';

import './index.scss';

/**
 * @author WangC
 * Containers Home
 */
const Home = () => (
    <div className="home-page">
        <div className="words">
            <span>当前页面为 redux + react-router 的案例页面 </span>
            <Button type="normal">
                <Icon type="loading" />
                Normal Button
            </Button>
            <Button type="primary">Primary Button</Button>
            <Button type="secondary">Secondary Button</Button>
        </div>
        <div>
            <Badge count={5}>
                <div className="user_pic" />
            </Badge>
        </div>
    </div>
);

export default connect(state => ({ home: state.home }))(Home);
