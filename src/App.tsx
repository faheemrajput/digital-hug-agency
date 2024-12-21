import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import AuthCallback from "@/pages/AuthCallback";
import ConfirmNewsletter from "@/pages/ConfirmNewsletter";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/confirm-newsletter" element={<ConfirmNewsletter />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;