import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style
import "./style/app.scss";

// pages
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Blog from "pages/Blog";
import Help from "pages/Help";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // const dataRoyalty = {
  //   to: "#",
  //   img: royaltyImg,
  //   title: "Gojek Loyalty",
  //   desc: "Make more transactions, get more rewards!",
  //   txtbtn: "View more",
  // };
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/partner" element={<Partner />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
