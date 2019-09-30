import React from "react";

import "../../index.css";
import "./style/style.css";

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FooterContainer">
        <ul>
          <li>
            <a href="#">About Lexxe</a>
          </li>
          <li>
            <a href="#">About News & Moods</a>
          </li>
          <li>
            <a href="#">Partnership</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <img alt="Copyright Logo Placeholder" url="#" />
      </div>
    );
  }
}

export default FooterComponent;
