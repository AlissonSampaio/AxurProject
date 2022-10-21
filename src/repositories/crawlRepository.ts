import { api } from "../services/api";
import { Crawl } from "../models/crawl";

type CreateCrawlParams = {
  keyword: string;
};

type CreateCrawlResponse = {
  id: string;
};

type GetCrawlParams = {
  keyword_id: string;
};

export const createCrawl = async ({
  keyword,
}: CreateCrawlParams): Promise<CreateCrawlResponse> => {
  const { data } = await api.post<CreateCrawlResponse>("/crawl", {
    keyword,
  });

  return data;
};

export const getCrawl = async ({
  keyword_id,
}: GetCrawlParams): Promise<Crawl> => {
  const { data } = await api.get<Crawl>(`/crawl/${keyword_id}`);

  return data;
};
