import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderLayout } from '~/components/Layout';
export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderLayout,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
export const privateRoutes = [];
