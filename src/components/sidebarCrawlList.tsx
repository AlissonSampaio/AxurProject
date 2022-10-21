import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { store } from "../store/store";
import { Button, ButtonVariant } from "./button";
import { RequestedCrawlItem } from "./requestedCrawlItem";

export const SidebarCrawlList = () => {
  const storeSnapshot = useSnapshot(store);

  if (storeSnapshot.requestedCrawls.length == 0) {
    return (
      <div className=" w-full h-full flex flex-1 justify-center items-center">
        Não há consultas adicionadas
      </div>
    );
  }

  return (
    <nav className="p-4 overflow-scroll w-full h-full">
      <ul className=" space-y-2">
        {storeSnapshot.requestedCrawls.map((requestedCrawl) => (
          <RequestedCrawlItem
            requestedCrawl={requestedCrawl}
            onClickDelete={() =>
              storeSnapshot.removeRequestedCrawl(requestedCrawl.id)
            }
          />
        ))}
      </ul>
    </nav>
  );
};
