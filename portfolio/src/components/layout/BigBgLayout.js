import { Outlet } from "react-router-dom";
import Header from "./Header";

const BigBgLayout = () => {
  return (
    <>
      <Header />
      <main className="big-background">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default BigBgLayout;
