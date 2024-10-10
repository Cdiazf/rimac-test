import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Layout from "./layouts/Layout";
import Register from "./pages/register/Register.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Plans from "./pages/plans/Plans.jsx";


function App() {
  return (
      <Router>
          <Routes>
              <Route  element={<Layout />}>
                  {/* The Register component is rendered by default when the path is '/' */}
                  <Route path="/" element={<Navigate to="register" /> } />
                  <Route path="register" element={<Register />} />
                  <Route path="plans" element={<Plans/>}/>
                  <Route path="summary" element={<Resume/>}/>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
