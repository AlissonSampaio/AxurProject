import { proxy, useSnapshot } from "valtio";

type StoreStateType = {
  crawlsIds: string[];
  addCrawlId: (id: string) => void;
  removeCrawlId: (id: string) => void;
};

export const state = proxy<StoreStateType>({
  crawlsIds: [],
  addCrawlId: (id: string) => {
    state.crawlsIds = [...state.crawlsIds, id];
  },
  removeCrawlId: (id: string) => {
    state.crawlsIds = state.crawlsIds.filter((crawlId) => crawlId !== id);
  },
});
