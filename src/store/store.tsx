import { proxy, useSnapshot } from "valtio";
import { RequestedCrawl } from "../models/requestedCrawl";

type StoreStateType = {
  isShowingSideBar: boolean;
  setIsShowingSidebar: (b: boolean) => void;
  requestedCrawls: RequestedCrawl[];
  addRequestedCrawl: (newRequestedCrawl: RequestedCrawl) => void;
  removeRequestedCrawl: (id: string) => void;
};

export const store = proxy<StoreStateType>({
  isShowingSideBar: false,
  setIsShowingSidebar: (b: boolean) => {
    store.isShowingSideBar = b;
  },
  requestedCrawls: [],
  addRequestedCrawl: (newRequestedCrawl: RequestedCrawl) => {
    store.requestedCrawls = [...store.requestedCrawls, newRequestedCrawl];
  },
  removeRequestedCrawl: (id: string) => {
    store.requestedCrawls = store.requestedCrawls.filter(
      (requestedCrawl) => requestedCrawl.id !== id
    );
  },
});
