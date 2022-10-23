import { useSnapshot } from "valtio";
import { store } from "../../../store/store";

export const SidebarCloseButton = () => {
  const { isShowingSideBar, setIsShowingSidebar } = useSnapshot(store);
  return (
    <div
      className="self-end p-4 cursor-pointer md:hidden"
      onClick={() => setIsShowingSidebar(!isShowingSideBar)}
    >
      <img className="w-6 h-6" src="/public/assets/svgs/close.svg" />
    </div>
  );
};
