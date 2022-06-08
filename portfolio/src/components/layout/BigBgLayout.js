import { Outlet } from "react-router-dom";

const BigBgLayout = () => {
  return (
    <main className="big-background">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

export default BigBgLayout;
