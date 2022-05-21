import { Outlet } from "react-router-dom";
import Header from "./Header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
