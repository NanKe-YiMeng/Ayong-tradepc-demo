import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'qnui';
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
const Demo2 = (props) => {
    const { actions, counter } = props;
    const plan = counter > 0 ? (<p>{`叫你点你还真点啊！${counter}`}</p>) : '';
    return (
        <div>
            {plan}
            <Button
                type="primary"
                className="redux-demo"
                onClick={() => {
                    actions.clickDemo(() => {

                    }, () => { });
                }}
            >
                点我看看222222
            </Button>
        </div>
    );
};
Demo2.propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.shape({ clickDemo: PropTypes.func.isRequired }).isRequired,
};
export default connect(
    state => state.Demo2,
    dispatch => ({ actions: bindActionCreators(action, dispatch) }),
)(Demo2);
