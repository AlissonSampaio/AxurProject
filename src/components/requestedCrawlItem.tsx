import { Link } from "react-router-dom";
import { RequestedCrawl } from "../models/requestedCrawl";
import { Button, ButtonVariant } from "./button";

type RequestedCrawlItemProps = {
  requestedCrawl: RequestedCrawl;
  onClickDelete: () => void;
};

export const RequestedCrawlItem = ({
  requestedCrawl,
  onClickDelete,
}: RequestedCrawlItemProps) => (
  <li className="p-2 hover:bg-[#F7F7F7] rounded-lg transition-all flex flex-row justify-between items-center hover:text-[#FF5823]">
    <Link to={`crawl/${requestedCrawl.id}`}>
      <p className="text-xl "> {requestedCrawl.keyword}</p>
      <p className="text-gray-400 text-xs"> {requestedCrawl.id}</p>
    </Link>
    <Button
      label="excluir"
      onClick={onClickDelete}
      variant={ButtonVariant.danger}
    />
  </li>
);
