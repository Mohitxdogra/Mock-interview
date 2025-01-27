import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";

import AuthenicationLayout from "@/layouts/auth-layout";
import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";
import ProtectRoutes from "@/layouts/protected-routes";
import {MainLayout} from "@/layouts/main-layout"; 
import Homepage from "@/routes/home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route  element={<PublicLayout />}>
          <Route index element={<Homepage/>} />
        </Route>

        {/* authentication routes */}
        <Route  element={<AuthenicationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes (example) */}
        <Route element={<ProtectRoutes> <MainLayout/> </ProtectRoutes>}> 
       
{/*add all prptected routes*/}

        </Route> 
      </Routes>
    </Router>

  );
};

export default App;