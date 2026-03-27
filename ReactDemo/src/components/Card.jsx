import React from "react";

const Card = ({ user }) => {
  const { name, age, city, profession, image } = user;

  return (
    <div className="flex justify-center">
      <div className="w-80 bg-white rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        
       
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={name}
        />

        
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          
          <p className="text-gray-500 text-sm mt-1">
            {age} years old • {city}
          </p>

          <p className="text-gray-700 mt-2">{profession}</p>

          
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;