import clsx from "clsx";
import { useSnapshot } from "valtio";
import { store } from "../../store/store";
import { SidebarCloseButton } from "./components/sidebarCloseButton";
import { SidebarCrawlForm } from "./components/SidebarCrawlForm";
import { SidebarCrawlList } from "./components/sidebarCrawlList";
import { SidebarOverlay } from "./components/sidebarOverlay";

export const Sidebar = () => {
  const { isShowingSideBar } = useSnapshot(store);
  return (
    <>
      <div
        id="sidebar"
        className={clsx(
          "flex z-20 flex-col h-screen transition-all border-r-2 bg-[#FAFAFA] overflow-hidden absolute w-screen max-w-[280px] md:transition-none md:relative  md:w-min-[320px] md:w-max-[40vw] md:w-[30vw] md:translate-x-0",
          {
            "translate-x-[-100vw]": !isShowingSideBar,
          }
        )}
      >
        <SidebarCloseButton />
        <SidebarCrawlForm />
        <SidebarCrawlList />
      </div>
      <SidebarOverlay />
    </>
  );
};
