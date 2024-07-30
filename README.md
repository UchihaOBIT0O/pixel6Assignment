# Pixel6 React Assignment

Single Page Application created using React, ReactRouter, ReactQuery, TailwindCSS, React-icons, useState, useSearchParams.

All the features required for the assignment is implements 
- Sorting by ID
- Sorting by Name
- Sorting by Age
- Filtering by Gender


I Choose ReactQuery for the state managment because most of the UI is tied to the remote state and is dependant on the fetched data 
the Sorting of ID,Name,Age is done on the server site using the searchParams conditionally. the only dataMutation and state managment locally done
is using a useState hook for filtering the fetching data by Gender.    

Apart from that i did not implemented a filtering by country Because the API provided "https://dummyjson.com/users" has a total of 208 records / 208 users and everyUser has his country as "United State" So there is no reason for implementing a
Filtering by country

Thank You!
