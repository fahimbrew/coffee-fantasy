import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div>
      <Toaster />
      <div className="container mx-auto">
        {/* NavBar */}
        <div className="h-16">
          <Navbar />
        </div>

        <div className="min-h-[calc(100vh-292px)] py-12">
          {/* Dynamic Section */}
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
