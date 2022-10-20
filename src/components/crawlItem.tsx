import React, { useState, useEffect } from "react";
import { Crawl } from "../models/request";
import { getRequest } from "../repositories/requestRepository";
import { useQuery } from "@tanstack/react-query";

import { Error } from "./error";
import { Loading } from "./loading";

type CrawlItemProps = {
  crawlId: string;
};

export const CrawlItem = ({ crawlId }: CrawlItemProps) => {
  const { isLoading, error, data } = useQuery(["crawl_data_" + crawlId], () =>
    getRequest({ keyword_id: crawlId })
  );

  console.log({ isLoading, error, data });

  if (data == null) return null;
  if (error) return <Error></Error>;
  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <p className="text-white">{data.id}</p>
      <p className="text-white">{data.status}</p>

      <p className="text-white">urls: </p>
      <ul>
        {data.urls.map((url) => (
          <li>{url}</li>
        ))}
      </ul>
    </div>
  );
};
