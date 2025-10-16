import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Glasses from "./pages/glass/Galsses";
import AppLayout from "./components/AppLayout";
import Food from "./pages/food/Food";
import Cloth from "./pages/cloth/Cloth";
import Homes from "./pages/homes/Homes";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookie from "./pages/Cookie";
import Page404 from "./pages/Page404";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/glass" element={<Glasses />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/sofa" element={<Homes />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
