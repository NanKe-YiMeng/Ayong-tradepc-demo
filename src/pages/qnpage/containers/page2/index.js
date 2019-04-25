import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'qnui';
import PropTypes from 'prop-types';
import * as actions from '../../actions/page2';
import './index.scss';

/**
 * @author WangC
 * Page2 页面
 */
class Page2 extends React.Component {
    propTypes = {
        dispatch: PropTypes.func.isRequired,
        page2: PropTypes.shape({ list: PropTypes.array.isRequired }).isRequired,
    }

    handleClick = () => {
        const { dispatch, page2 } = this.props;
        dispatch(actions.getList(page2.counter + 1));
    };

    /**
     * @author WangC
     */
    render() {
        const { page2: { list } } = this.props;
        return (
            <div className="page2-page">
                <p>
                    <Button onClick={this.handleClick}>加载列表</Button>
                </p>
                <p>
                    {list.map(item => (
                        <span className="result" key={item}>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        );
    }
}

// map state to props
export default connect(state => ({ page2: state.page2 }))(Page2);
