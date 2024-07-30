import { TbSortAscendingNumbers } from "react-icons/tb";
import { FaSortAlphaDown } from "react-icons/fa";
import Item from "../Ui/Item";

import Loading from "../Ui/Loading";
import useUsers from "../Hooks/useUsers";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function UsersData() {
  const { data, isLoading, error, isError } = useUsers(); //using the Custom useUsers hook to access and render the fetched data
  const [gender, setGender] = useState("gender"); //useState hook to manage the Dropdown box for gender sorting
  const [searchParams, setSearchParams] = useSearchParams({
    field: "",
    order: "",
  }); //setting the searchParams so that we can do the data mutation directly from the api filtering method

  if (isLoading) return <Loading />; //isLoading === true this is run

  //so make the dropdown box reactive
  function sortByGender(e) {
    setGender(e.target.value);
  }

  //this function sortBy takes a field like "firstName", "age", "id" and then assign it to the field param also manipulate the order param based on its current value
  function sortBy(field) {
    const currentField = searchParams.get("field");
    const currentOrder = searchParams.get("order");

    if (
      currentField !== field ||
      currentOrder === "desc" ||
      currentOrder === ""
    ) {
      searchParams.set("field", field);
      searchParams.set("order", "asc");
    } else {
      searchParams.set("field", field);
      searchParams.set("order", "desc");
    }
    setSearchParams(searchParams);
  }

  //handler to sortByName
  function sortByName() {
    sortBy("firstName");
  }

  //handler to sortByAge
  function sortByAge() {
    sortBy("age");
  }

  //handler to sortById
  function sortById() {
    sortBy("id");
  }

  //this function takes the data received from the useUsers and the gender State is responsible for filtering the data according to the select gender state if we select any gender from the dropdown it will return that data
  //other wise it will return the data we received from the useUsers hook
  function filterByGender(data, gender) {
    if (gender === "gender") {
      return data;
    }
    return data.filter(
      (person) => person.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  if (isError) return <p>{error.message}</p>; //responsible for rendering the error occured during the fetching

  //assigning the result of the filterByGender function by passing the data from the useUsers,gender this data will be either the data from useUsers/data of males/data of females
  let filteredData = filterByGender(data, gender);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex max-w-5xl mx-auto  justify-between items-center my-4">
        <p className="text-3xl font-bold text-third">USERS</p>
        <select
          name="Gender"
          id="gender"
          onChange={sortByGender}
          className="h-7 w-24 bg-transparent border-none rounded-md text-third"
        >
          <option
            defaultChecked
            value="gender"
            className="bg-primary border-none outline-none h-4 text-center"
          >
            Gender
          </option>
          <option
            value="male"
            className="bg-primary border-none outline-none h-4 text-center"
          >
            Male
          </option>
          <option
            value="female"
            className="bg-primary border-none outline-none h-4 text-center"
          >
            Female
          </option>
        </select>
      </div>
      <div className="grid grid-rows-[auto] gap-0 ">
        <div className="grid grid-cols-[1fr_0.5fr_1fr_0.5fr_0.5fr_1fr_1fr] py-4 border-b text-fourth items-center text-base font-semibold">
          <div
            onClick={sortById}
            className="ml-20 flex gap-1.5 items-center cursor-pointer"
          >
            <span>ID</span>
            <span className="text-lg">
              <TbSortAscendingNumbers />
            </span>
          </div>
          <span>Image</span>
          <span className="flex gap-2 items-center" onClick={sortByName}>
            Full Name <FaSortAlphaDown />
          </span>
          <span>Gender</span>
          <div
            onClick={sortByAge}
            className="flex gap-1.5 items-center cursor-pointer"
          >
            <span>Age</span>
            <span className="text-lg">
              <TbSortAscendingNumbers />
            </span>
          </div>
          <span>Designation</span>
          <span>Location</span>
        </div>
        {/**Here we will render "No Data to Show" if the filteredData array is empty otherwise we will render a <Item/> component for each element in the filteredData
         * array using the array.map() method
         */}
        {filteredData.length !== 0 ? (
          filteredData.map((user) => {
            return <Item user={user} key={user.id} />;
          })
        ) : (
          <p className="text-2xl text-center">No Data to Show</p>
        )}
      </div>
    </div>
  );
}

export default UsersData;
