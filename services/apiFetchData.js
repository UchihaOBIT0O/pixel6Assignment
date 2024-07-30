//The async function that takes skip, files, order props
//this is responsible to fetching the data from the server the URL in the function will be modified according to the received props to get the correct data

export default async function getUsers({ skip, field = "", order = "" }) {
  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skip}&select=firstName,lastName,maidenName,age,gender,id,image,address,company&${
      field && order && `sortBy=${field}&order=${order}`
    }`
  );
  if (!res.ok) {
    const text = await res.statusText;
    throw new Error("Something Went Wrong while fetching the data", text);
  }
  const data = await res.json();
  return data.users;
}
