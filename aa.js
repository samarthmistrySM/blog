import React, { useState, useEffect } from 'react';

export default function Home() {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1a8508acbamshe22a601e60d0019p1a1964jsn6448cb72c8b0',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        setFoodData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFoodData();
  }, []);

  if (!foodData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-2">{foodData.food.label}</h2>
        <img src={foodData.food.image} alt={foodData.food.label} className="mb-4" />
        <div className="text-gray-700">
          <p>Category: {foodData.food.categoryLabel}</p>
          <p>Calories: {foodData.food.nutrients.ENERC_KCAL}</p>
          <p>Protein: {foodData.food.nutrients.PROCNT}g</p>
          <p>Fat: {foodData.food.nutrients.FAT}g</p>
          <p>Carbohydrates: {foodData.food.nutrients.CHOCDF}g</p>
        </div>
      </div>
    </div>
  );
}
