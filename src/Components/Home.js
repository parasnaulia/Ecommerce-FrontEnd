import Nav from "./Nav";

// import Sidebar from "./Sidebar";

import Footer from "./Footer";

import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const Home = () => {
  const dataAuth = useSelector((state) => {
    return state.Auth;
  });
  console.log(dataAuth);

  const data1 = useSelector((state) => {
    return state.Toggle;
  });

  return (
    <>
      <div className="Container">
        <Nav />
        {data1 && <Sidebar />}
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Home;
