import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/const";
import { Login, Chat } from "../components";

const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />
  }
];

const privateRoutes = [
  {
    path: CHAT_ROUTE,
    element: <Chat />
  }
];

export { publicRoutes, privateRoutes };
