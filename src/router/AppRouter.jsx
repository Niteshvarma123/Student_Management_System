import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Auth from "../pages/auth/Auth.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import Footer from "../components/Footer/Footer.jsx";

import ContactForm from "../pages/contact/Contact.jsx";
import About from "../pages/about/Aboutus.jsx";

import StudentDashboard from "../pages/student/StudentDashboard.jsx";
import TeacherDashboard from "../pages/teacher/TeacherDashboard.jsx";
import EditStudent from "../pages/admin/StudentEditForm.jsx";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />

            {/* Friend's routes */}
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<About />} />

            {/* Your routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/edit/student/:srollno" element={<EditStudent />} />
            
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}
