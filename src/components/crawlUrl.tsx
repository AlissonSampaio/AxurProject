type CrawlUrlProps = {
  url: string;
};

export const CrawlUrl = ({ url }: CrawlUrlProps) => (
  <li className="px-2 py-1 rounded bg-gray-200 text-slate-900 m-1 hover:text-[#ff5823]">
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {url}
    </a>
  </li>
);
