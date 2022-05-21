import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { AboutPage, ContactPage, HomePage } from "./pages";
import { BaseLayout } from "./components/layout";
import BigBgLayout from "./components/layout/BigBgLayout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BigBgLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
