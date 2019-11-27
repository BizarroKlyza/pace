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
import axios from 'axios';
import {Dropdown,DropdownButton } from 'react-bootstrap';

const NEWS_AND_MOODS_URL = "https://www.newsandmoods.com"
class Page extends React.Component {
  //to do, the website defaults to a certain search instead of being straight on the home page
  //constructing of state
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
      sortMethod:10,
      searchMode:4,
      country:'au',
      hostCountry:'au',
      error:false,
      errorMessage:'',
      response:null,
      totalDocs:0,
      totalPositive:0,
      totalNeutral:0,
      totalNegative:0,
      GeneralStats:0,
      NewsItems:[],
      timeEnd:'10259980',
      timeStart:'10259260',
      loading:false,
    };
    //binding functions to component
    this.hideFiltersToggled = this.hideFiltersToggled.bind(this);
    this.resetSearchFilters = this.resetSearchFilters.bind(this);
    this.searchStringChanged = this.searchStringChanged.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.PerformSearch = this.PerformSearch.bind(this);
    this.calculateTimeBetweenNowAndThen = this.calculateTimeBetweenNowAndThen.bind(this);
  }
  //perform search on default load
  componentDidMount(){
    this.PerformSearch("Hi");
  }
  //perform get request to lexxe, dependent on non cors issues right now. Access control allow origins issues
  PerformSearch(e){
    this.setState({
      loading:true,
    })
    axios.get(NEWS_AND_MOODS_URL+'/app?sstring='+this.state.searchString+'&src=qh&sort='+this.state.sortMethod+'&menu=1&mode='+this.state.searchMode+'&country='+this.state.country+'&host='+this.state.hostCountry+'&ts='+this.state.timeStart+'&te='+this.state.timeEnd+'&td=-600&date=2').then((response)=>{

      this.setState({
        response:response.data,
        GeneralStats:response.data.generalStats,
        totalPositive:response.data.generalStats.positiveCount,
        totalDocs:response.data.generalStats.totalDocCnt,
        totalNegative:response.data.generalStats.negativeCount,
        totalNeutral:response.data.generalStats.neutralCount,
        NewsItems:response.data.news,
        loading: false,

      })
    },(err)=>{
      // window.alert("Error");
      // window.alert(err);
      this.setState({error:true,errorMessage:err, loading:false})
    });

  }
  calculateTimeBetweenNowAndThen(time){
    var today = new Date();
    var date = new Date(time);
    var diffMs = (date - today); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return diffMins;
  }
  //updater of search string
  searchStringChanged(e) {
    e.preventDefault();
    this.setState({
      searchString: e.currentTarget.value
    });
  }
  //hide search filters function
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
  //reset filters function
  resetSearchFilters(e) {
    e.preventDefault();

    this.setState({
      searchString: ""
    });
  }
  //'change page' function
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

  // function showTopButton() {
  //             const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //             showOn = 50,
  //             topButton = document.querySelector('.top-button');
  //
  //             if (distanceY > showOn) {
  //                 topButton.classList.add("show-button");
  //             } else {
  //                 topButton.classList.remove("show-button");
  //             }
  //         }
  //
  //         window.addEventListener('scroll', showTopButton;



  render() {
    let displayedComponent = <ResultsPage NewsItems={this.state.NewsItems} GeneralStats={this.state.GeneralStats} />;
    //if statement switch for rendering different pages
    //pass data as props to children as needed
    if (this.state.pageDisplay === "Results") {
      displayedComponent = <ResultsPage NewsItems={this.state.NewsItems} GeneralStats={this.state.GeneralStats} />;
    }
    if (this.state.pageDisplay === "General") {
      displayedComponent = <GeneralPage GeneralStats={this.state.GeneralStats} />;
    }
    if (this.state.pageDisplay === "Trend") {
      displayedComponent = <TrendPage />;
    }
    if (this.state.pageDisplay === "Source") {
      displayedComponent = <SourceMap />;
    }
    if(this.state.loading===true){
      displayedComponent=(
        <div>
          <text>
          Loading...
          </text>
        </div>);
    }
    let options="";
    //nav menu
    if(this.state.show){
      options=(<div>
        <ul><li><Dropdown.Item onClick={()=>{this.setState({pageDisplay:'Results'})}}>Results</Dropdown.Item></li>
              <li><Dropdown.Item onClick={()=>{this.setState({pageDisplay:'General'})}}>General</Dropdown.Item></li>
              <li>  <Dropdown.Item onClick={()=>{this.setState({pageDisplay:'Source'})}}>Source Map</Dropdown.Item></li>
              <li>  <Dropdown.Item onClick={()=>{this.setState({pageDisplay:'Results'})}}>Login</Dropdown.Item></li></ul></div>
    )
  }
  //where the HTML gets rendered
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

                    <label>Country</label>
                    <input></input>
                    <label>News Topic</label>
                    <input ></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                    <label>Filter Option Item</label>
                    <input></input>
                  </Menu>

                  <DropdownButton onClick={()=>this.setState({show:!this.state.show})} id="dropdown-basic-button" title="Menu">
                    {options}
                  </DropdownButton>

                <input
                  type="text"
                  className="SearchInput"
                  value={this.state.searchString}
                  onChange={e => this.searchStringChanged(e)}
                />

                <input type="button" value="Search" onClick={(e)=>this.PerformSearch(e)}className="SearchButton" />
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
