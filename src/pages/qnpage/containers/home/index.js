import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Badge } from 'qnui';
import PropTypes from 'prop-types';
import * as actions from '../../actions/home';

import './index.scss';

/**
 * @author WangC
 * Containers Home
 */
const Home = ({ clickDemo, home }) => (
    <div className="home-page">
        <div className="words">
            <span>当前页面为 redux + react-router 的案例页面 </span>
            <span>
                点击了
                {home.text}
                次
            </span>
            <Button type="normal">
                <Icon type="loading" />
                Normal Button
            </Button>
            <Button type="primary" onClick={clickDemo}>Primary Button</Button>
            <Button type="secondary">Secondary Button</Button>
        </div>
        <div>
            <Badge count={5}>
                <div className="user_pic" />
            </Badge>
        </div>
    </div>
);

Home.propTypes = {
    home: PropTypes.shape({ text: PropTypes.string.isRequired }).isRequired,
    clickDemo: PropTypes.func.isRequired,
};

export default connect(state => ({ home: state.home }), dispatch => ({ clickDemo: () => dispatch(actions.getData()) }))(Home);
