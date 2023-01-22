import "./App.css";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Task from './pages/Task';
import Kanban from './pages/Kanban';
import User from './pages/User';
import ForgotPassword from './pages/ForgotPassword';
import Team from './pages/Team';
import AccountSettings from './pages/AccountSettings';
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />

          <Route path="/account-settings" element={<AccountSettings />} />

          <Route path="/user" element={<User />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/task" element={<Task />} />

          <Route path="/kanban" element={<Kanban />} />

        </Routes>
      </Router>
  );
}

export default App;
