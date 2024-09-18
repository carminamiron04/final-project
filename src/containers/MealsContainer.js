import React, { useState, useEffect } from "react";
import { MealComponent } from "../components/MealComponent";
import { Link } from "react-router-dom";
import SearchbarComponent from "../components/SearchbarComponent";


const mealContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};

export const MealsContainer = () => {
  //Hooks

  //store search value from input and setter for this data
  const [searchValue, setSearchValue] = useState([]);

  //store meals data, and set from fetch response
  const [data, setData] = useState([]);

  //what happens after search is updated / changed
  useEffect (
    () => fetchData(searchValue), // secondery effect from searchValue update
    [searchValue] //dependency => searchValue
);

  //will do the fetch
  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((responseJSON) => setData(responseJSON));
  };

  const handleInputChange = (event) => setSearchValue(event.target.value);
  

  return (
    <div className="container"> 
      <SearchbarComponent  
      searchValue={searchValue} 
      handleInputChange={handleInputChange}
      />

      {/*Meals results*/}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-2">
        {data.meals
        ? data.meals.map((meal,index) => (
          <Link 
          to={"/meals/" + meal.idMeal}
          key={index}
          className="text-decoration-none">
            <MealComponent 
            key={meal.idMeal} 
            strMeal={meal.strMeal} 
            strMealThumb={meal.strMealThumb}/>
          </Link>
        ))
        : "NO DATA AVAILABLE"}
    </div>
    </div>
  );
};