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
          <li className="FooterListItem">
            <a href="#">About Lexxe</a>
          </li>
          <li className="FooterListItem">
            <a href="#">About News & Moods</a>
          </li>
          <li className="FooterListItem">
            <a href="#">Partnership</a>
          </li>
          <li className="FooterListItem">
            <a href="#">Jobs</a>
          </li>
          <li className="FooterListItem">
            <a href="#">Terms of use</a>
          </li>
          <li className="FooterListItem">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>

        © Lexxe 2019




      </div>
    );
  }
}

export default FooterComponent;
