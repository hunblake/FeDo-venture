import { React, useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "../src/assets/font/font-awesome.css";
import routes from "./pages";
import Page404 from "./pages/404";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const smoothScroll = (selector) => {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
    };

    const handleAnchorClick = (event) => {
      if (
        event.target.tagName === "A" &&
        event.target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        smoothScroll(event.target.getAttribute("href"));
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Header />
      {/* Removed the div containing the TradingText component */}
      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
