import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import HomePagePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import RegisterPagePage from "pages/RegisterPage";
import ForgotPasswordPage from "pages/ForgotPassword";
import VerifyEmailPage from "pages/VerifyEmail";
import LoginPagePage from "pages/LoginPage";
import ScrollToTop from "components/ScrollToTop";



// Define your routes inside a component
const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop /> {/* This ensures scrolling to top on route changes */}
    <Routes>
      <Route path="/" element={<HomePagePage />} />
      <Route path="/loginpage" element={<LoginPagePage />} />
      <Route path="/registerpage" element={<RegisterPagePage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/verifyemail" element={<VerifyEmailPage />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
