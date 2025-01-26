import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";
import Homepage from "@/routes/home";
import AuthenicationLayout from "@/layouts/auth-layout";
import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";
import ProtectRoutes from "@/layouts/protected-routes";
import {MainLayout} from "@/layouts/main-layout"; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Homepage />} />
        </Route>

        {/* authentication routes */}
        <Route path="/auth" element={<AuthenicationLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        {/* protected routes (example) */}
        <Route path="/dashboard" element={<ProtectRoutes><MainLayout /></ProtectRoutes>}> 
       
{/*add all prptected routes*/}

        </Route> 
      </Routes>
    </Router>
  );
};

export default App;