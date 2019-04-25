import App from 'components/app/index';
import { Home, Page1, Page2 } from './containers';

const createRoutes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'page1', component: Page1 },
        { path: 'page2', component: Page2 },
    ],
};

export default createRoutes;
