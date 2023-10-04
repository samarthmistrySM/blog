import React, { useState, useEffect } from 'react';

export default function Home    () {
  const [foodData, setFoodData] = useState([]);

  const url =
    'localhost:4000';
  

  useEffect(() => {
    fetch(url +'/api/blogs')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  if (!foodData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row flex-wrap ">
      {foodData.map((foodItem) => (
        <div key={foodItem.foodId} className="bg-gray-100 p-4 rounded-md shadow-md basis-1/3">
          <h1 className="text-2xl font-bold mb-4">{foodItem.label}</h1>
          <div className="flex justify-evenly items-center mb-4">
            <div className="flex-1">
              <p className="font-semibold">Calories:</p>
              <p>{foodItem.nutrients.ENERC_KCAL} kcal</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Protein:</p>
              <p>{foodItem.nutrients.PROCNT} g</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Fat:</p>
              <p>{foodItem.nutrients.FAT} g</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Carbohydrates:</p>
              <p>{foodItem.nutrients.CHOCDF} g</p>
            </div>
          </div>
          <img
            src={foodItem.image}
            alt={"https://static.toiimg.com/thumb/msid-70660524,imgsize-1204032,width-400,resizemode-4/70660524.jpg"}
            className="max-w-full h-auto rounded-md"
          />
        </div>
      ))}
    </div>
  );
}
