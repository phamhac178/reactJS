import Home from "../pages/homes/index";
import Following from "../pages/Following/index";
import Profile from "../pages/profile/index";
import Upload from "../pages/Upload/index";

//public router
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/Following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, Layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
