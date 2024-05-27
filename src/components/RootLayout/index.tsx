import Footer from "../Footer";
import Header from "../Header";
import "./styles.scss";
import { Outlet } from "react-router-dom";

export default function RootLayout () {
  return (
    <div className="main">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}