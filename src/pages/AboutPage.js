import React from "react";
import TopbarContainer from "../containers/TopbarContainer";
import FootbarContainer from "../containers/FootbarContainer";
import "../App.css"; // For styling

export default function AboutPage() {
  return (
    <div className="container-fluid">
      <TopbarContainer />
      <div>
        <div className="p-5 mt-2 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h5 className="display-5 fw-bold">
              Here are some things about me ...
            </h5>
            <p className="col-md-8 fs-4">
              As a food blogger, I immerse myself in the vibrant world of
              culinary exploration, where every dish tells a story and each
              ingredient has a unique role. My passion for food drives me to
              discover and share diverse recipes, cooking tips, and culinary
              experiences that inspire others to embrace their own kitchen
              adventures.
            </p>
          </div>
        </div>
        <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-20 p-2 bgcolor1 rounded-3">
          <p>With a camera in one hand and a whisk in the other, I navigate the delicious landscape of food blogging. My journey began with a simple love for cooking and has blossomed into a vibrant community of fellow food enthusiasts. I explore everything from comforting family recipes to innovative gastronomy, always seeking to capture the beauty and essence of each dish.</p>
        </div>
        <div class="h-20 p-3 mt-2 bgcolor rounded-3">
          <p>Engagement is key; I cherish the interactions with my readers, responding to comments and sharing their culinary creations inspired by my posts. My social media platforms serve as an extension of my blog, where I share mouthwatering photos, quick recipes, and behind-the-scenes glimpses into my food journey.</p>
        </div>
        <div class="h-20 p-3 mt-2 bgcolor1 rounded-3">
          <p>Ultimately, being a food blogger allows me to blend my love for writing, photography, and cooking into a fulfilling creative outlet. I’m committed to fostering a community of food lovers who appreciate the joy of cooking and the magic of sharing meals together. Join me as we explore flavors, celebrate culture, and create delicious memories one recipe at a time!</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5">
        <img src="https://carminamiron04.github.io/final-project/4.jpg" className="image"/>
        </div>
      </div>
      </div>
      </div>
      <FootbarContainer />
    </div>
  );
}
