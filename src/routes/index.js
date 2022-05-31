import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderLayout } from '~/components/Layouts';
import routesConfig from '~/config/routes';

export const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
    },
    {
        path: routesConfig.profile,
        component: Profile,
        layout: HeaderLayout,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];
export const privateRoutes = [];
