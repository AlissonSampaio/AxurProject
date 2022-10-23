import { useSnapshot } from "valtio";
import { store } from "../../../store/store";

export const RootContentMenuButton = () => {
  const { isShowingSideBar, setIsShowingSidebar } = useSnapshot(store);
  return (
    <div
      className="h-screen shadow-md p-2 cursor-pointer md:hidden"
      onClick={() => setIsShowingSidebar(!isShowingSideBar)}
    >
      <img
        className="w-6 h-6 object-cover"
        src="/public/assets/svgs/menu.svg"
      />
    </div>
  );
};
