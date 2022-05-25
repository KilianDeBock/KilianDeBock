import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { AboutPage, ContactPage, HomePage, PortfolioPage } from "./pages";
import { BaseLayout } from "./components/layout";
import BigBgLayout from "./components/layout/BigBgLayout";

function App() {
  return (
    <div className="app">
      <Routes basename="/">
        <Route exact path="/" element={<BigBgLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
