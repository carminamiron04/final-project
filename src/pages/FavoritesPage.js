import React, { useEffect, useState } from 'react';
import TopbarContainer from '../containers/TopbarContainer';
import { MealComponent } from '../components/MealComponent';
import { Link } from 'react-router-dom';
import FootbarContainer from '../containers/FootbarContainer';
import "../App.css";

function FavoritesPage() {

    const [meals, setMeals] = useState([{}]);
    useEffect (() => setMeals(JSON.parse(localStorage.getItem("meals")) || [] ),[]);
 
  return (
    <div className="container-fluid">
        <TopbarContainer/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-1">
        {meals
        ? meals.map((meal, index) => (
          <Link
          key={index}
          to={"/meals/" + meal.idMeal}
          className="text-decoration-none">
            <MealComponent 
            key={meal.idMeal} 
            strMeal={meal.strMeal} 
            strMealThumb={meal.strMealThumb}/>
          </Link>
        ))
        : "NO DATA AVAILABLE"}
        </div>
        <FootbarContainer/>
    </div>
  );
}

export default FavoritesPage;
