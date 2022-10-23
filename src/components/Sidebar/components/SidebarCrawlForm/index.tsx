import { Button } from "../../../button";
import { Input } from "../../../input";
import useSidebarCrawlForm from "./useSidebarCrawlForm";

export const SidebarCrawlForm = () => {
  const { searchTerm, setSearchTerm, onClickSaveButton, error, isLoading } =
    useSidebarCrawlForm();

  if (isLoading) {
    return (
      <div className="flex flex-row p-4 border-b-2 justify-between">
        <p>Enviando requisição</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row p-4 border-b-2 justify-between">
      <div className="w-screen">
        <Input onValueChange={setSearchTerm} placeholder="Termo de pesquisa" />
        <p className="text-sm text-red-600 mt-1">{error}</p>
      </div>

      <Button onClick={() => onClickSaveButton(searchTerm)} label="Adicionar" />
    </div>
  );
};
