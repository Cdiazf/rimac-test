import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProgressBarSteps from "../components/ProgressBarSteps.jsx";
import useCurrentStep from "../hooks/useCurrentStep.jsx";



const Layout = () => {

    const location = useLocation();
    const currentStep = useCurrentStep();


    return (

          <div className="layout">


              { location.pathname === "/register" && <>
                  <div className="background-image"></div>
                  <div className="background-image-right"></div>
              </>}
              <Header/>
              {currentStep !== null && (
                  <ProgressBarSteps currentStep={currentStep} />
              )}


              <Outlet/>

              <Footer/>


          </div>

  );
};

export default Layout;
