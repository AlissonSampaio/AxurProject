import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/skeleton";
import { getCrawl } from "../repositories/crawlRepository";
import { useSnapshot } from "valtio";
import { store } from "../store/store";

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
    <div className="p-4 flex flex-col max-h-screen overflow-hidden">
      {isLoading ? (
        <Skeleton className="h-5 m-2 w-40" />
      ) : (
        <p className="">Id: {data?.id}</p>
      )}

      {keyword &&
        (isLoading ? (
          <Skeleton className="h-5 m-2 w-40" />
        ) : (
          <p>Termo de pesquisa: {keyword}</p>
        ))}

      {isLoading ? (
        <Skeleton className="h-5 m-2 w-40" />
      ) : (
        <p className="">Status: {data.status}</p>
      )}

      {isLoading ? (
        <Skeleton className="h-5 m-2 w-40" />
      ) : (
        <div className="flex flex-1 flex-col  overflow-hidden">
          <p className="">Resultados: </p>
          <div className="flex flex-1 flex-col  overflow-y-scroll">
            <ul className=" ">
              {data.urls.map((url) => (
                <li className="p-2">
                  <a target="_blank" rel="noopener noreferrer" href={url}>
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
