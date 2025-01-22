import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* NavBar */}
        <Navbar />

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
