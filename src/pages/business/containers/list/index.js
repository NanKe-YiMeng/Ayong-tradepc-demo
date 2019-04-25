import React from 'react';
import { connect } from 'react-redux';
import { Button, Feedback } from 'qnui';
import PropTypes from 'prop-types';
import * as actions from '../../actions/index';

import './index.scss';

/**
 * @author WangC
 * List Component
 */
class List extends React.Component {
    propTypes = {
        dispatch: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }

    /**
     * Component Constructor
     * @param {*} props this.props
     */
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    /**
     * Handle Click
     */
    handleClick = () => {
        const { dispatch, counter } = this.props;

        if (this.loading) {
            return false;
        }

        this.setState({ loading: true });
        dispatch(actions.getList(counter + 1, () => {
            this.setState({ loading: false });
        }, (json) => {
            this.setState({ loading: false });
            Feedback.Toast.error({ content: json.msg });
        }));
        return 0;
    }

    /**
     * Component Render
     */
    render() {
        const { list } = this.props;
        const { loading } = this.state;
        return (
            <div className="list-page">
                <p>
                    <Button onClick={this.handleClick}>加载列表</Button>
                    {loading ? <span className="loading-text">加载中...</span> : ''}
                </p>
                <p>
                    {list.map(item => <span className="result" key={item}>{item}</span>)}
                </p>
            </div>
        );
    }
}


// map state to props
export default connect(state => state)(List);
