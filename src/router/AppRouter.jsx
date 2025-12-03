import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Auth from "../pages/auth/Auth.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}
