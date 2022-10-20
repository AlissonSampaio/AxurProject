import { useState } from "react";
import { useSnapshot } from "valtio";

import { Button } from "../../components/button";
import { CrawlItem } from "../../components/crawlItem";
import { Input } from "../../components/input";
import { Crawl } from "../../models/request";
import { getRequest } from "../../repositories/requestRepository";
import { state } from "../../store/store";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [crawlData, setCrawlData] = useState<Crawl>();

  const snap = useSnapshot(state);

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-white font-bold">Requests Showcase</h1>

      <ul>
        {snap.crawlsIds.map((crawlId) => (
          <CrawlItem crawlId={crawlId} />
        ))}
      </ul>
    </div>
  );
}
