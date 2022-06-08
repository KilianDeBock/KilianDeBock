import { Outlet } from "react-router-dom";

const ContainerLayout = () => {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default ContainerLayout;
