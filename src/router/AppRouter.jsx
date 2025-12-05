import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Auth from "../pages/auth/Auth.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import Footer from "../components/Footer/Footer.jsx";
import StudentDashboard from "../pages/student/StudentDashboard.jsx";
import TeacherDashboard from "../pages/teacher/TeacherDashboard.jsx";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}
