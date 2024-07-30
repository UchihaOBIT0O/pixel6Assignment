import UsersData from "./UsersData";
import Pagination from "../Ui/Pagination";

//main layout

function AppLayout() {
  return (
    <main className="h-screen flex flex-col font-josefin text-secondary bg-primary">
      <header className="mx-auto max-w-6xl py-8">
        <p className="font-bold text-3xl text-third">PIXEL6 REACT ASSIGNMENT</p>
      </header>
      <div className="flex-1">
        <UsersData />
        <Pagination />
      </div>
    </main>
  );
}

export default AppLayout;
