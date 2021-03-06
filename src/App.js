import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import  BoatsList from './BoatsList'
import  BoatCreateUpdate  from './BoatCreateUpdate'
import  GuidesList from './GuidesList'
import  GuideCreateUpdate  from './GuideCreateUpdate'
import  SwimLanesList from './SwimLanesList'
import  SwimLaneCreateUpdate  from './SwimLaneCreateUpdate'
import  BoatServiceList from './BoatServiceList'
import  BoatServiceCreateUpdate  from './BoatServiceCreateUpdate'
import './App.css';

var handleNavMouseEnter=function(div){
	$('.dropdown-menu').hide();
	$(div).show();
}
var handleNavMouseLeave=function(div){
        $('.dropdown-menu').hide();
}

const BaseLayout = () => (
  <div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Fishfry</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

	<ul className="navbar-nav ml-auto mr-auto test">
		<li className="nav-item ">
			<div className="link-wrapper">
				<a className="nav-link text-uppercase font-weight-bold " href="/">Dashboard</a>
			</div>
		</li>
		<li className="nav-item ">
                        <div className="link-wrapper">
                                <a className="nav-link text-uppercase font-weight-bold " href="/boatservice">Create Boat Service</a>
                        </div>
                </li>
		<li className="nav-item dropdown " onMouseEnter={()=>handleNavMouseEnter('#dropdown-item-boat')} onMouseLeave={()=>handleNavMouseLeave()}>
			<div className="link-wrapper">
				<a className="nav-link text-uppercase font-weight-bold dropdown-toggle">
				Boat</a>
			</div>
			<ul className="dropdown-menu" id="dropdown-item-boat">
				<li>
					<a className="dropdown-item" href="/boatslist">Boats List</a>
				</li>
				<li>
					<a className="dropdown-item" href="/boat/">Create Boat</a>
				</li>
			</ul>
		</li>
		<li className="nav-item dropdown " onMouseEnter={()=>handleNavMouseEnter('#dropdown-item-guide')} onMouseLeave={()=>handleNavMouseLeave()}>
                        <div className="link-wrapper">
				<a className="nav-link text-uppercase font-weight-bold dropdown-toggle">
                        	Guide </a>
                        </div>
                        <ul className="dropdown-menu" id="dropdown-item-guide">
                                <li>
                                        <a className="dropdown-item" href="/guideslist/">Guides List</a>
                                </li>
                                <li>
                                        <a className="dropdown-item" href="/guide/">Create Guide</a>
                                </li>
                        </ul>
                </li>
		<li className="nav-item dropdown " onMouseEnter={()=>handleNavMouseEnter('#dropdown-item-swimlane')} onMouseLeave={()=>handleNavMouseLeave()}>
                        <div className="link-wrapper">
				<a className="nav-link text-uppercase font-weight-bold dropdown-toggle" >
                        	SwimLanes</a>
                        </div>
                        <ul className="dropdown-menu" id="dropdown-item-swimlane">
                                <li>
                                        <a className="dropdown-item" href="/swimlaneslist/">SwimLane List</a>
                                </li>
                                <li>
                                        <a className="dropdown-item" href="/swimlane/">Create SwimLane</a>
                                </li>
                        </ul>
                </li>
	</ul>
</nav>  

    <div className="content">
      	<Route path="/" exact component={BoatServiceList} />
      	<Route path="/boatservice/:pk"  component={BoatServiceCreateUpdate} />
	<Route path="/boatservice/" exact component={BoatServiceCreateUpdate} />
	<Route path="/guideslist/" exact component={GuidesList} />
	<Route path="/guide/:pk"  component={GuideCreateUpdate} />
	<Route path="/guide/" exact component={GuideCreateUpdate} />
	<Route path="/swimlaneslist/" exact component={SwimLanesList} />
	<Route path="/swimlane/:pk"  component={SwimLaneCreateUpdate} />
	<Route path="/swimlane/" exact component={SwimLaneCreateUpdate} />
      	<Route path="/boatslist/" exact component={BoatsList} />
      	<Route path="/boat/:pk"  component={BoatCreateUpdate} />
      	<Route path="/boat/" exact component={BoatCreateUpdate} />
	
    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
