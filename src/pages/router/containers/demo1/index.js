import React from 'react';
import { Button } from 'qnui';
import './index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
const Demo1 = ({ counter }) => {
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
                点我看看111111
            </Button>
        </div>
    );
};
Demo1.propTypes = { counter: PropTypes.number.isRequired };
export default connect(
    state => state.Demo1,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Demo1);
