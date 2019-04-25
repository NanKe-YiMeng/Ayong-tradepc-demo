import React from 'react';
import Header from '../header/index';
import './index.scss';
/**
    @author Mothpro
* */
const App = ({ children }) => (
    <div className="container">
        {/* 导航条 */}
        <Header />
        <div className="content">
            {/* 页面内容区域 */}
            {children}
        </div>
    </div>
);
export default App;
