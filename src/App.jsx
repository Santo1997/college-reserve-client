import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";

export const ClgContext = createContext();

function App() {
  const clgData = useLoaderData();
  console.log(clgData);
  return (
    <>
      <ClgContext.Provider value={clgData}>
        <Header />
        <div className="mt-24 px-1 md:px-5">
          <Outlet />
        </div>
        <Footer />
        <Toaster />
      </ClgContext.Provider>
    </>
  );
}

export default App;
