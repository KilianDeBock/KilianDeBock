import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BigBgLayout from "./components/layout/BigBgLayout";
import {
  AboutPage,
  ContactPage,
  HomePage,
  PointsCalculatePage,
  PortfolioPage,
  ToolsPage,
} from "./pages";
import { BaseLayout } from "./components/layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<BigBgLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<BaseLayout />}>
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/tools" element={<BaseLayout />}>
        <Route index element={<ToolsPage />} />
        <Route exact path="/tools/points" element={<PointsCalculatePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
