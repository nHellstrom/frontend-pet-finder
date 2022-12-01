import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutpage__container">
      <h2>About the initiative</h2>
      <p>
        Losing ones pet can be a very emotionally distressing event, even more
        so when not knowing where to turn for help. A lot of lost pet-groups are
        based on social media sites such as Facebook, and are particularly
        difficult to find if one is new to the area. Fauni seeks to be a
        non-profit site helping to connect people who have spotted or found a
        lost pet, and the people who seek it.
      </p>

      <h2>About us</h2>
      <p>
        Fauni was made by animal enthusiasts with a desire to practice their
        coding skills:
      </p>
      <ul className="aboutpage__creatorslist">
        <li>Shujat A.</li>
        <li>Guido B.</li>
        <li>Niklas H.</li>
        <li>Lotten W.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
