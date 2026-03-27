import React, { useContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DataContext } from "./context/UserContext";


const App = () => {

  const data = useContext(DataContext);
  console.log({ data });
  return (
    <div>
      
      
      <Header />
      appppp
      <Footer />
    </div>
  )
}

export default App



// import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Product from "./components/Product";
// import Contact from "./components/Contact";
// import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <h1>Hello, React!</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// const App = () => {
//   const users = [
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
//     <>
//       <Header />

//       <div className="flex flex-wrap gap-6 justify-center mt-10">
//         {users.map((user, index) => (
//           <Card key={index} user={user} />
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {

//   const [username, setUsername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername("");

//   }
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <form onSubmit={(e) => {submitHandler(e)}} className="bg-white shadow-lg rounded-2xl p-8 text-center">
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your name"
//             className="border border-black-300 rounded-md py-2 px-4 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // var name = e.target[0].value;
//     // alert("Form submitted! Name: " + name);

//     console.log("Form submit");

//   }

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
//       <form action="" onSubmit = {(e) => {submitHandler(e)}} className='bg-white shadow-lg rounded-2xl p-8 text-center'>
//         <input type="text" placeholder='Enter your name' className='border border-black-300 rounded-md py-2 px-4 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
//         <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// const App = () => {
//   // const increment = () => {

//   //   setNum(num + 1);

//   // };

//   //  const decrement = () => {

//   //   setNum(num - 1);

//   // };

//   const [num, setNum] = useState(0);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           Hello, World! {num}
//         </h1>

//         <p className="text-gray-600 mb-6">
//           This is a simple React application.
//         </p>

//         <div className="flex gap-4 justify-center">
//           <button
//             onClick={() => setNum(num + 1)}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
//           >
//             Increment
//           </button>

//           <button
//             onClick={() => setNum(num - 1)}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
