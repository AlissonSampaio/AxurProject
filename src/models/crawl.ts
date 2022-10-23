export enum CrawlStatus {
  active = "active",
  done = "done",
}

export type Crawl = {
  id: string;
  status: CrawlStatus;
  urls: string[];
};
