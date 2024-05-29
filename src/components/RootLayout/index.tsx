import Footer from "../Footer";
import Header from "../Header";
import "./styles.scss";
import { Outlet } from "react-router-dom";

export default function RootLayout () {
  return (
    <div className="root-layout">
      <div>
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}