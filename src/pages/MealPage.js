import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopbarContainer from "../containers/TopbarContainer";
import "../App.css";
import FootbarContainer from "../containers/FootbarContainer";


export default function MealPage({ strMeal, strMealThumb }) {
  const { idMeal } = useParams();
  let vId ="";
  const [text, setText] = useState("Add to Favorites");

  // LS= local storage
  const mealDataFromLS = JSON.parse(localStorage.getItem("meals")) || [];
  const [mealData, setMealData] = useState(mealDataFromLS);
console.log(mealDataFromLS, "mealsdatafromls");
console.log(mealData);
  function handleClick() {
    const toBeAdded = !mealDataFromLS.some((item) => {
      return item.idMeal === idMeal;
    });

    if (toBeAdded) {
      setMealData([
        ...mealData, //existing MealData
        {
          //merge new meal that was clicked
          strMeal: details.strMeal,
          strMealThumb: details.strMealThumb,
          idMeal,
        },
      ]);
    }

    setText("Added to Favorites");
  }

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(mealData));
  }, [mealData]);

  //fetch for meal details

  const [details, setDetails] = useState({});

  //what happens after search is updated / changed
  useEffect(
    () => fetchData(idMeal), // secondery effect from searchValue update
    [idMeal] //dependency => searchValue
  );

  //will do the fetch
  const fetchData = (idMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setDetails(responseJSON.meals["0"]);
      });
  };

  if(details.strYoutube) {
    const url = details.strYoutube;
    console.log(details);
    const str = url?.split('=');
    vId = str[1];
  }

  return (
    <>
      <TopbarContainer />
      <div className="container1">
        <div className="card m-2 shadow-sm" style={{ width: "300px" }}>
          <div className="card-body align-items-center d-flex flex-column">
            <img
              width={"200px"}
              height={"200px"}
              src={details.strMealThumb}
            ></img>
            <p className="card-text">{details.strMeal}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <p className="ms-2 m-0">{text}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 instructionsdiv">
          <h3 className="display-7 my-5">Instructions:</h3>
          <p className="instructions mb-4">{details.strInstructions}</p>
        </div>
      </div>
      <div className="containerVideo">
        <div className="ingredients">
          <ul className="fs-5">
            Ingredients:
            <li>
              {details.strIngredient1}: {details.strMeasure1}
            </li>
            <li>
              {details.strIngredient2}: {details.strMeasure2}
            </li>
            <li>
              {details.strIngredient3}: {details.strMeasure3}
            </li>
            <li>
              {details.strIngredient4}: {details.strMeasure4}
            </li>
            <li>
              {details.strIngredient5}: {details.strMeasure5}
            </li>
            <li>
              {details.strIngredient6}: {details.strMeasure6}
            </li>
            <li>
              {details.strIngredient7}: {details.strMeasure7}
            </li>
            <li>
              {details.strIngredient8}: {details.strMeasure8}
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe src={`https://www.youtube.com/embed/${vId}`}></iframe>
        </div>
      </div>
      <FootbarContainer/>
    </>
  );
}
