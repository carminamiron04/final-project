import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import TopbarContainer from "../containers/TopbarContainer";
import FrontContainer from "../containers/FrontContainer";
import FootbarContainer from "../containers/FootbarContainer";




export default function HomePage() {

  return (
    <div className="container-fluid">
      
        <TopbarContainer/>
        <FrontContainer/>
      <div className="d-flex containermeals mt-2">
        <MealsContainer/>
      </div>
      <FootbarContainer/>
      </div>
  );
}
