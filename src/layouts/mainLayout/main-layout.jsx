import { Outlet } from "react-router-dom";
import TopNav from "./top-nav";
import Sidebar from "./sidebar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="wrapper" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="main">
        <TopNav/>
        <main className="content">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
