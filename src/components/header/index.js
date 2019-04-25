import Tools from 'utils/index';
import React from 'react';
import { Navigation, Icon, Menu } from 'qnui';
const { Item } = Navigation;

/**
    @author Mothpro
    导航条
**/
class Header extends React.Component {
	render() {
		const linkConfig = {
			//本地localhost或127.0.0.1环境下的路径设置
			local: {
				redux: '/dist/redux.html',

				routerDemo: '/dist/router.html#/demo',
				routerDemo1: '/dist/router.html#/demo1',
				routerDemo2: '/dist/router.html#/demo2',

				qnpage: '/dist/qnpage.html#/',
				qnpagePage1: '/dist/qnpage.html#/page1',
				qnpagePage2: '/dist/qnpage.html#/page2',

				h5: '/dist/h5/ebsindex.html'
			},
			onLine: {
				//自行根据服务端路径定义
				redux: '/dist/redux.html',

				routerDemo: '/dist/router.html#/demo',
				routerDemo1: '/dist/router.html#/demo1',
				routerDemo2: '/dist/router.html#/demo2',

				qnpage: '/dist/qnpage.html#/',
				qnpagePage1: '/dist/qnpage.html#/page1',
				qnpagePage2: '/dist/qnpage.html#/page2',

				h5: '/dist/h5/ebsindex.html'
			}
		};

		const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

		return (
			<Navigation type="filling" activeDirection="bottom">
				<li className="navigation-logo-zone">
					<Icon type="email" />
					<span>爱用交易</span>
				</li>
				<Item itemid="1" text="Router" icon="service">
					<Menu>
						<Menu.Item key="1" link={links.routerDemo}>
							<a href={links.routerDemo}>About</a>
						</Menu.Item>
						<Menu.Item key="2" link={links.routerDemo1}>
							<a href={links.routerDemo1}>About1</a>
						</Menu.Item>
						<Menu.Item key="3" link={links.routerDemo2}>
							<a href={links.routerDemo2}>About2</a>
						</Menu.Item>
					</Menu>
				</Item>
				<Item itemid="2" text="QNPage" icon="service">
					<Menu>
						<Menu.Item key="1" link={links.qnpage}>
							<a href={links.qnpage}>QNPage-Home</a>
						</Menu.Item>
						<Menu.Item key="2" link={links.qnpagePage1}>
							<a href={links.qnpagePage1}>QNPage-Page-1</a>
						</Menu.Item>
						<Menu.Item key="3" link={links.qnpagePage2}>
							<a href={links.qnpagePage2}>QNPage-Page-2</a>
						</Menu.Item>
					</Menu>
				</Item>
				<Item itemid="3" text="Redux" icon="training" link={links.redux} />
				<Item itemid="4" text="H5" icon="training" link={links.h5} />
				<li className="navigation-toolbar">
					<ul>
						<li>
							<Icon type="atm" />
							<span>帮助</span>
						</li>
						<li>
							<Icon type="set" />
							<span>设置</span>
						</li>
					</ul>
				</li>
			</Navigation>
		);
	}
}
export default Header;
