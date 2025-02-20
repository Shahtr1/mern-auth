import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { ResetPassword } from "./pages/ResetPassword.jsx";
import { AppContainer } from "./components/AppContainer.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { setNavigate } from "./lib/services/navigation.js";
import { PrivateRoute } from "./lib/services/PrivateRoute.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Gallery } from "@/lib/pages/gallery/Gallery.jsx";

function App() {
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="settings"
          element={
            <PrivateRoute Component={Settings} allowedRoutes={["admin"]} />
          }
        />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/email/verify/:code" element={<VerifyEmail />}></Route>
      <Route path="/password/forgot" element={<ForgotPassword />}></Route>
      <Route path="/password/reset" element={<ResetPassword />}></Route>
    </Routes>
  );
}

export default App;
