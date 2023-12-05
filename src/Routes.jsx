import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PerformanceBenchmarkScreen = React.lazy(
  () => import("pages/PerformanceBenchmarkScreen"),
);
const ManualTradeImport = React.lazy(() => import("pages/ManualTradeImport"));
const RiskAssessmentScreen = React.lazy(
  () => import("pages/RiskAssessmentScreen"),
);
const PerformanceBenchmarkScreenOne = React.lazy(
  () => import("pages/PerformanceBenchmarkScreenOne"),
);
const TradeStrategyLoggerScreen = React.lazy(
  () => import("pages/TradeStrategyLoggerScreen"),
);
const UserJourneyEntry = React.lazy(() => import("pages/UserJourneyEntry"));
const UserJournalCollectionScreen = React.lazy(
  () => import("pages/UserJournalCollectionScreen"),
);
const ProfileScreen = React.lazy(() => import("pages/ProfileScreen"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const EmailAddressVerifiedSuccessfully = React.lazy(
  () => import("pages/EmailAddressVerifiedSuccessfully"),
);
const VerifyEmail = React.lazy(() => import("pages/VerifyEmail"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route
            path="/emailaddressverifiedsuccessfully"
            element={<EmailAddressVerifiedSuccessfully />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profilescreen" element={<ProfileScreen />} />
          <Route
            path="/userjournalcollectionscreen"
            element={<UserJournalCollectionScreen />}
          />
          <Route path="/userjourneyentry" element={<UserJourneyEntry />} />
          <Route
            path="/tradestrategyloggerscreen"
            element={<TradeStrategyLoggerScreen />}
          />
          <Route
            path="/performancebenchmarkscreenone"
            element={<PerformanceBenchmarkScreenOne />}
          />
          <Route
            path="/riskassessmentscreen"
            element={<RiskAssessmentScreen />}
          />
          <Route path="/manualtradeimport" element={<ManualTradeImport />} />
          <Route
            path="/performancebenchmarkscreen"
            element={<PerformanceBenchmarkScreen />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
