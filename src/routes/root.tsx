import { Outlet } from "react-router-dom";
import { SidebarCrawlForm } from "../components/SidebarCrawlForm";
import { SidebarCrawlList } from "../components/sidebarCrawlList";

export default function Root() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div
        id="sidebar"
        className="flex flex-col h-screen max-h-screen w-[35vw] min-w-[240px] border-r-2 bg-[#FAFAFA] overflow-hidden relative"
      >
        <SidebarCrawlForm />
        <SidebarCrawlList />
      </div>
      <div className="w-[65vw]">
        <Outlet />
      </div>
    </div>
  );
}
