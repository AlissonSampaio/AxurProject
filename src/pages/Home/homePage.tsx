import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { state } from "../../store/store";
import { createRequest } from "../../repositories/requestRepository";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const onClickSaveButton = async () => {
    try {
      const response = await createRequest({ keyword: searchTerm });
      console.log({ response });
      state.addCrawlId(response.id);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-white">Post</h1>
      <Input onValueChange={setSearchTerm} mx={6} mt={6} mb={6}></Input>
      <Button
        label="SAVE"
        className="bg-white w-44"
        onClick={onClickSaveButton}
        mx={6}
        mt={6}
        mb={6}
      ></Button>
      <Link className="text-white" to={`dashboard`}>
        Dashboard
      </Link>
    </div>
  );
}
