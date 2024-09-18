import React from "react";
import '../App.css';

const mealText = { backgroundColor: "white", color: "black" };

const mealTitle = { fontSize: "20px" };

const mealDescription = { fontSize: "14px", color: "gray" };

const mealCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    border: "1px solid gray",
    borderRadius: "10px",
};


export const MealComponent = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="col">
      <div className="card flex-row card-body align-items-center d-flex flex-column text-primary-emphasis">
        <img className="rounded card-img-top"style={{ width: "200px", height: "200px" }} src={strMealThumb}></img>
        <div className="card-body">
          <h3 className="fs-6">{strMeal}</h3>
        </div>
      </div>
    </div>
  );
};