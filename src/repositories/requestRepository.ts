import { api } from "../services/api";
import { Crawl } from "../models/request";

type CreateCrawlParams = {
  keyword: string;
};

type CreateCrawlResponse = {
  id: string;
};

type GetRequestParams = {
  keyword_id: string;
};

export const createRequest = async ({
  keyword,
}: CreateCrawlParams): Promise<CreateCrawlResponse> => {
  const { data } = await api.post<CreateCrawlResponse>("/crawl", {
    keyword,
  });

  return data;
};

export const getRequest = async ({
  keyword_id,
}: GetRequestParams): Promise<Crawl> => {
  const { data } = await api.get<Crawl>(`/crawl/${keyword_id}`);

  return data;
};
