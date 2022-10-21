import { useState } from "react";
import { createCrawl } from "../../repositories/crawlRepository";
import { store } from "../../store/store";
import axios from "axios";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClickSaveButton = async (keyword: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await createCrawl({ keyword });
      store.addRequestedCrawl({ id: response.id, keyword });
    } catch (error) {
      let errorMessage;
      const unexpectedDefaultMessage = "Ocorreu um erro inesperado.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data.message ?? unexpectedDefaultMessage;
      } else {
        errorMessage = unexpectedDefaultMessage;
      }
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  return {
    searchTerm,
    isLoading,
    error,
    setSearchTerm,
    onClickSaveButton,
  };
};
