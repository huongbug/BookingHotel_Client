import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rooms from "../pages/Room/Rooms";
import User from "../pages/User/User";
import AboutUs from "../pages/About-us";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import RoomDetail from "../pages/Room/RoomDetail";
import Booking from "../pages/Booking/Booking";

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
