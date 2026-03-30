import React from "react";
import { useEffect } from "react";
import { fetchUsers } from "../redux/features/apidataSlice";
import { useDispatch, useSelector } from "react-redux";

const DataPrint = () => {

  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("hii"); 
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className=" gap-5 m-10">
      <ul>
        {data.map((data, index) => (
          <li key={index} className="text-3xl font-bold">
            Name:- {data.name}, Email:- {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataPrint;

// import React from "react";

// const DataPrint = () => {
//   const data = [
//     {
//       name: "Amit Sharma",
//       age: 28,
//       city: "Mumbai",
//       profession: "Software Engineer",
//       image: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       name: "Priya Patel",
//       age: 24,
//       city: "Ahmedabad",
//       profession: "Graphic Designer",
//       image: "https://randomuser.me/api/portraits/women/2.jpg",
//     },
//     {
//       name: "Rahul Verma",
//       age: 32,
//       city: "Delhi",
//       profession: "Digital Marketer",
//       image: "https://randomuser.me/api/portraits/men/3.jpg",
//     },
//     {
//       name: "Sneha Reddy",
//       age: 27,
//       city: "Hyderabad",
//       profession: "Doctor",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       name: "Karan Mehta",
//       age: 30,
//       city: "Pune",
//       profession: "Entrepreneur",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//   ];

//   return (
//     <div className=" gap-5 m-10">
//       <ul>
//         {data.map((data, index) => (
//           <li key={index} className="text-3xl font-bold">Name:- {data.name}, City:- {data.city}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataPrint;
