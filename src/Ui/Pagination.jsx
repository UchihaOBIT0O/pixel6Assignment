import { useSearchParams } from "react-router-dom";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
  });

  const currentSkip = !searchParams.get("skip")
    ? 0
    : Number(searchParams.get("skip"));

  const page = currentSkip === 0 ? 1 : currentSkip / 10 + 1;

  function next() {
    const next = currentSkip + 10;
    searchParams.set("skip", next);
    setSearchParams(searchParams);
  }

  function prev() {
    const prev = currentSkip === 0 ? currentSkip : currentSkip - 10;
    searchParams.set("skip", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="max-w-6xl mx-auto py-4 my-2 flex items-center justify-between">
      <div>
        <p className="text-third">
          Showing Page: <span className="text-xl">{page}</span>
        </p>
      </div>

      <div className="flex gap-4">
        <button
          className="border rounded-full h-9 text-xl font-bold w-9 text-third bg-primary active:text-primary active:bg-third"
          onClick={prev}
        >
          <span>&larr;</span>
        </button>
        <button
          className="border rounded-full h-9 text-xl font-bold w-9 text-third bg-primary active:text-primary active:bg-third"
          onClick={next}
        >
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
