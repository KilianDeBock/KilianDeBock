import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { AboutPage, ContactPage, HomePage, PortfolioPage } from "./pages";
import { BaseLayout } from "./components/layout";
import BigBgLayout from "./components/layout/BigBgLayout";

function App() {
  return (
    <div className="app">
      <Routes basename="/KilianDeBock">
        <Route exact path="/KilianDeBock" element={<BigBgLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/KilianDeBock" element={<BaseLayout />}>
          <Route exact path="/KilianDeBock/about" element={<AboutPage />} />
          <Route
            exact
            path="/KilianDeBock/portfolio"
            element={<PortfolioPage />}
          />
          <Route exact path="/KilianDeBock/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
