import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import { HeaderLayout } from '~/layouts';
import config from '~/config';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: HeaderLayout,
    },
    {
        path: config.search,
        component: Search,
        layout: null,
    },
];
export const privateRoutes = [];
