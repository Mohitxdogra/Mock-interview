import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";

import AuthenicationLayout from "@/layouts/auth-layout";
import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout"; 
import Homepage from "@/routes/home";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import ResumeBuilder from "./components/resume-builder";
import ContactUs from "@/routes/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/contact" element={<ContactUs />} /> 
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenicationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes (example) */}
        <Route element={<ProtectRoutes> <MainLayout /> </ProtectRoutes>}> 
          {/* Protected Routes */}
          <Route element={<Generate />} path="/generate/">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
          </Route>
        </Route> 
      </Routes>
    </Router>
  );
};

export default App;
