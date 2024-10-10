import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import { useLocation } from "react-router-dom";



const Layout = () => {
    const location = useLocation();

    return (
      <>
          <div className="layout">

              { location.pathname === "/register" && <>
                  <div className="background-image"></div>
                  <div className="background-image-right"></div>
              </>}
              <Header/>
              <Outlet/>
              <Footer/>


          </div>
      </>
  );
};

export default Layout;
