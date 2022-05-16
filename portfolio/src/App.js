import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { AboutPage, ContactPage, HomePage } from "./pages";
import { BaseLayout } from "./components/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
