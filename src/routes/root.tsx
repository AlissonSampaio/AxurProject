import { Sidebar } from "../components/Sidebar";
import { RootContent } from "../components/RootContent/rootContent";

export default function Root() {
  return (
    <div className="flex flex-row h-screen w-screen relative">
      <Sidebar />
      <RootContent />
    </div>
  );
}
