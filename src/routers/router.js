import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rooms from "../pages/Room/Rooms";
import User from "../pages/User/User";
import AboutUs from "../pages/About-us";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import RoomDetail from "../pages/Room/RoomDetail";
import Manage from "../pages/Admin/Manage";
import AddManage from "../pages/Admin/AddManage";
import Booking from "../pages/Booking/Booking";
import UpdateManage from "../pages/Admin/UpdateManage";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog-detail/:blogId", component: BlogDetail },
  { path: "/rooms", component: Rooms },
  { path: "/user", component: User },
  { path: "/booking", component: Booking },
  { path: "/room-detail/:roomId", component: RoomDetail },
  { path: "/about-us", component: AboutUs },
  { path: "/blog", component: Blog },
  // { path: "/auth/login", component: Login },
  { path: "/auth/register", component: Register },
  { path: "/admin/:option", component: Manage },
  { path: "/admin/add/:option", component: AddManage },
  { path: "/admin/update/:option/:optionId", component: UpdateManage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
