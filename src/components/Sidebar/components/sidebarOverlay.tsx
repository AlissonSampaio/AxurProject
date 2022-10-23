import clsx from "clsx";
import { useSnapshot } from "valtio";
import { store } from "../../../store/store";

export const SidebarOverlay = () => {
  const { isShowingSideBar, setIsShowingSidebar } = useSnapshot(store);
  return (
    <div
      id="overlay"
      onClick={() => setIsShowingSidebar(false)}
      className={clsx(
        "absolute cursor-pointer w-screen z-10 h-screen bg-black bg-opacity-50 right-0 md:hidden",
        {
          hidden: !isShowingSideBar,
        }
      )}
    ></div>
  );
};
