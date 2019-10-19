import React from "react";

import "../../index.css";
import "./style/header_style.css";
import Star from "../star/starz";

import ResultsPage from "../results-page/results-page";
import { slide as Menu } from 'react-burger-menu'
import GeneralPage from "../general-page/general-page";
import SourceMap from "../source-map/sourcemap";
import TrendPage from "../trend-page/trend";
import FooterComponent from "../footer/footer";

import {Dropdown } from 'react-bootstrap';

class Page extends React.Component {
  //to do, the website defaults to a certain search instead of being straight on the home page
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      searchString: "",
      newsType: "",
      sentimentType: "",
      relevance: "",
      //country: "",
      newsCategories: "",
      timeFrom: "",
      hideFilters: false,
      pageDisplay: "",
    };

    this.hideFiltersToggled = this.hideFiltersToggled.bind(this);
    this.resetSearchFilters = this.resetSearchFilters.bind(this);
    this.searchStringChanged = this.searchStringChanged.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  searchStringChanged(e) {
    e.preventDefault();
    this.setState({
      searchString: e.currentTarget.value
    });
  }
  hideFiltersToggled(e) {
    e.preventDefault();
    if (this.state.hideFilters === true) {
      document.getElementById("srchFilters").style.display = "Block";
    } else {
      document.getElementById("srchFilters").style.display = "None";
    }

    this.setState({
      hideFilters: !this.state.hideFilters
    });
  }

  resetSearchFilters(e) {
    e.preventDefault();

    this.setState({
      searchString: ""
    });
  }
  handleNavigation(arg) {
    this.setState({
      pageDisplay: arg
    });
  }

  // <div className="HeaderRow" id="headerRowTwo">
  //
  //   <div className="NavMenuContainer">
  //     <ul className="NavMenuList">
  //       <li>
  //         <a href="#" onClick={e => this.handleNavigation("Results")}>
  //             Results
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" onClick={e => this.handleNavigation("General")}>
  //           General
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" onClick={e => this.handleNavigation("Trend")}>
  //           Trend
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" onClick={e => this.handleNavigation("Source")}>
  //           Source Map
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>

  //
  // <div className="ResultsOverviewContainer">
  //   <h5>Results Of Search</h5>
  //   <div className="LeftJustified">
  //     <Star />
  //   </div>
  //   <div className="CentreJustified"></div>
  //   <div className="RightJustified">
  //     About x (positive n/negative n) results from k sources and p
  //     country.
  //   </div>
  //   <input
  //     type="button"
  //     value="Toggle Filters"
  //     onClick={e => this.hideFiltersToggled(e)}
  //   />
  // </div>

  // <div className="SearchFilterContainer" id="srchFilters">
  //   <ul className="SearchList">
  //     <li className="SearchFilterListItem">
  //       <a  href="#">News</a>
  //     </li>
  //     <li className="SearchFilterListItem">
  //       <a href="#">All Sentiment</a>
  //     </li>
  //     <li className="SearchFilterListItem">
  //       <a href="#">Relevance</a>
  //     </li>
  //     <li className="SearchFilterListItem">
  //       <a href="#">All Categories</a>
  //     </li>
  //     <li className="SearchFilterListItem">
  //       <a href="#">Time From</a>
  //     </li>
  //   </ul>
  //
  // </div>


  render() {
    let displayedComponent = <ResultsPage />;
    //I know, I'm a naughty boy.
    if (this.state.pageDisplay === "Results") {
      displayedComponent = <ResultsPage />;
    }
    if (this.state.pageDisplay === "General") {
      displayedComponent = <GeneralPage />;
    }
    if (this.state.pageDisplay === "Trend") {
      displayedComponent = <TrendPage />;
    }
    if (this.state.pageDisplay === "Source") {
      displayedComponent = <SourceMap />;
    }
    return (
      <div>
        <div className="HeaderContainer">
          <div className="HeaderRow" id="headerRowOne">

            <div className="LeftJustified">
              <img alt="Logo" className="logo-img" src="https://www.newsandmoods.com/images/newsandmoods.png"></img>
            </div>
            <div className="CentreJustified">
                  <div className="SearchContainer">
                  <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                  </Menu>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Results</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">General</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Source Map</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                <input
                  type="text"
                  className="SearchInput"
                  value={this.state.searchString}
                  onChange={e => this.searchStringChanged(e)}
                />
                <input type="button" value="Search" className="SearchButton" />
                <input
                  type="button"
                  value="Reset"
                  onClick={e => this.resetSearchFilters(e)}
                ></input>


              </div>

            </div>

          </div>


        </div>
        {displayedComponent}
        <FooterComponent />
      </div>
    );
  }
}

export default Page;
