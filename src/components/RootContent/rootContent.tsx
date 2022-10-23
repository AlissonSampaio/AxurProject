import { Outlet } from "react-router-dom";
import { RootContentMenuButton } from "./components/rootContentMenuButton";

export const RootContent = () => {
  return (
    <div className="flex flex-row w-full z-0">
      <RootContentMenuButton />
      <Outlet />
    </div>
  );
};
