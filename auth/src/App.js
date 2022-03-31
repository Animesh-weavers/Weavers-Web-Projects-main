import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<HomePage />} />
          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />} />
          )}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
