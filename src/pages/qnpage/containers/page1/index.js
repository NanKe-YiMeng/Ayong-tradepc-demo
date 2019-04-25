import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'qnui';
import * as actions from '../../actions/page1';
import './index.scss';

/**
 * @author WangC
 * The Containers Page1
 */
class Page1 extends React.Component {
    /**
     * @author WangC
     *  Handle Click 点击事件
     */
    handleClick = () => {
        const { dispatch, page1 } = this.props;
        dispatch(actions.addText(`文本${page1.list.length + 1}`));
    };

    /**
     * @author WangC
     * Render 渲染 Page1 页面
     */
    render() {
        const { page1: { list } } = this.props;

        return (
            <div className="page1-page">
                {/* spm埋点 c位只要页面内唯一即可 */}
                <div data-spm="1">
                    <p>
                        <Button onClick={this.handleClick}>添加文本</Button>
                    </p>
                    <p>
                        {list.map(item => (
                            <span className="result" key={item}>
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
                <div data-spm="2">
                    <a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">
                        我是个链接
                    </a>
                </div>
            </div>
        );
    }
}
Page1.propTypes = {
    dispatch: PropTypes.func.isRequired,
    page1: PropTypes.shape({ list: PropTypes.array.isRequired }).isRequired,
};

export default connect(state => ({ page1: state.page1 }))(Page1);
