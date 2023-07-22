import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="mt-24 px-1 md:px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
