import { proxy, useSnapshot } from "valtio";
import { RequestedCrawl } from "../models/requestedCrawl";

type StoreStateType = {
  requestedCrawls: RequestedCrawl[];
  addRequestedCrawl: (newRequestedCrawl: RequestedCrawl) => void;
  removeRequestedCrawl: (id: string) => void;
};

export const store = proxy<StoreStateType>({
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
