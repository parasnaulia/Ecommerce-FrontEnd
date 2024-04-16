import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import RealCart from "./Components/RealCart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useSelector } from "react-redux";
import Sucess from "./Components/Sucess";
import Cancel from "./Components/Cancel";
import ForgotPass from "./ForgotPass";
import Reset from "./Reset";

function App() {
  const dataAuth = useSelector((state) => {
    return state.Auth;
  });
  const route = createBrowserRouter([
    {
      path: "/",
      element: dataAuth === true ? <Home /> : <Login />,
      children: [
        {
          path: "/",
          element: dataAuth === true ? <Body /> : <Login />,
        },
        {
          path: "/contact",
          element: dataAuth === true ? <Contact /> : <Login />,
        },
        {
          path: "/about",
          element: dataAuth === true ? <About /> : <Login />,
        },
        {
          path: "/profile",
          element: dataAuth === true ? <Profile /> : <Login />,
        },
        {
          path: "/cart",
          element: dataAuth === true ? <Cart /> : <Login />,
        },
        {
          path: "/realCart",
          element: dataAuth === true ? <RealCart /> : <Login />,
        },
      ],
    },
    {
      path: "/login",
      element: dataAuth === true ? <Home /> : <Login />,
    },
    {
      path: "/signup",
      element: dataAuth === true ? <Home /> : <Signup />,
    },
    {
      path: "/sucess",
      element: dataAuth === true ? <Sucess /> : <Signup />,
    },
    {
      path: "/cancel",
      element: dataAuth === true ? <Cancel /> : <Signup />,
    },
    {
      path: "/forgotPass",
      element: <ForgotPass />,
    },
    {
      path: "/reset/:id/:token",
      element: <Reset />,
    },
  ]);

  return (
    <RouterProvider router={route}>
      <>
        <Home />
      </>
    </RouterProvider>
  );
}
export default App;
