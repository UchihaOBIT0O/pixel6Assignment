import { useQuery, useQueryClient } from "@tanstack/react-query";
import getUsers from "../../services/apiFetchData";
import { useSearchParams } from "react-router-dom";

/**
 * @returns {data: array, isLoading: boolean, error: object, isError: boolean}
 */

/**
 * * this Hook is responsible for fetching the data using the getUsers async function
 * it uses the useQuery() custom hook provided by the ReactQuery it takes Object of props
 * on of them will be queryKey: [] it takes the array of keys and if any one of the key is mutated the data will be re-fetched again
 * and queryFn is the function getUsers
 *
 * we take the searchParams skip, field, order and pass it to the getUsers
 *
 * we also prefetch the data for certain conditions as you can see below
 */

function useUsers() {
  const queryClient = useQueryClient(); //responsible to prefetching the data
  const [searchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip"));
  const field = searchParams.get("field");
  const order = searchParams.get("order");

  //responsible for fetching data initially
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["users", skip, order, field],
    queryFn: () => getUsers({ skip, order, field }),
  });

  //Prefetching data
  if (skip > 0) {
    queryClient.prefetchQuery({
      queryKey: ["users", skip + 10, order, field],
      queryFn: () => getUsers({ skip: skip + 10, order, field }),
      onSuccess: () => {},
    });
  }

  //prefetching the data
  if (skip > 10) {
    queryClient.prefetchQuery({
      queryKey: ["users", skip - 10, order, field],
      queryFn: () => getUsers({ skip: skip - 10, order, field }),
    });
  }

  //returning the fetched data as a object
  return { data, isLoading, error, isError };
}

export default useUsers;
