import { Outlet } from "react-router-dom";
import { RootContentMenuButton } from "./components/rootContentMenuButton";

export const RootContent = () => {
  return (
    <div className="w-screen flex flex-row md:w-[100vw] z-0">
      <RootContentMenuButton />
      <Outlet />
    </div>
  );
};
