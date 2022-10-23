import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/skeleton";
import { getCrawl } from "../repositories/crawlRepository";
import { useSnapshot } from "valtio";
import { store } from "../store/store";
import { CrawlUrl } from "../components/crawlUrl";
import { CrawlStatus } from "../models/crawl";
import clsx from "clsx";

export const CrawlDetails = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["crawl_data_" + id], () =>
    getCrawl({ keyword_id: id! })
  );

  const storeSnapshot = useSnapshot(store);

  if (data == null) return null;
  if (error) return <p>Ocorreu um erro ao carregar os dados</p>;

  const keyword = storeSnapshot.requestedCrawls.find(
    (crawl) => crawl.id === id
  )?.keyword;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="w-full p-6 flex flex-row items-center justify-between h-[4.75rem] border-b-2 bg-[#FAFAFA]">
        {isLoading ? (
          <Skeleton className="h-5 m-2 w-40" />
        ) : (
          <h2 className="text-gray-600">{data?.id}</h2>
        )}
        {isLoading ? (
          <Skeleton className="h-5 m-2 w-40" />
        ) : (
          <span
            className={clsx("text-2xl", {
              "text-[#FF5823]": data?.status === CrawlStatus.active,
              "text-[#22c55e]": data?.status === CrawlStatus.done,
            })}
          >
            {data?.status}
          </span>
        )}
      </div>

      {keyword && (
        <div className="w-full p-3 justify-center items-center flex border-b-2">
          {isLoading ? (
            <Skeleton className="h-5 m-2 w-40" />
          ) : (
            <p className="font-bold">{keyword}</p>
          )}
        </div>
      )}

      {isLoading ? (
        <Skeleton className="h-5 m-2 w-40" />
      ) : (
        <div className="flex flex-1 flex-col  overflow-y-scroll">
          <ul className=" ">
            {data.urls.map((url) => (
              <CrawlUrl url={url} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
