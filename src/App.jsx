import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";
import XrayCursor from "../components/sections/XrayCursor";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home";
import ProjectsPage from "../components/sections/ProjectsPage";
import ProjectDetails from "../components/sections/ProjectDetails";


function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BrowserRouter>

        {loading && (
          <SplashScreen
            onComplete={() => {
              setLoading(false);
            }}
          />
        )}

        <div className={
          loading
            ? "site site-loading"
            : "site site-ready"
        }>

          <XrayCursor />
          <Navbar />
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/projects"
              element={<ProjectsPage />}
            />

            <Route
              path="/projects/:slug"
              element={<ProjectDetails />}
            />



          </Routes>


          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;