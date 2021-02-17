import React from "react";
import './pages.css';

function Portfolio() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Projects</h2>
            <div class="column">
              <img src="Assets/Images/AustinSearch.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
              <br/> <br/>
               <p class="title">Weather Dashboard</p> 
            </div>
            <p class="lead">
              In this project, I created a weather dashboard where the user needs only to enter their desired city and click "search", 
              to return the weather forecast for that city. I was able to get the weather forecast 
              for the current day and next five days by using the Open Weather Map API. 
              It dynamically responds and works on desktop browsers, 
              as well as phones or tablets. 
              <ul class="lead">Tools used:
                <li>JQuery</li>
                <li>API</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <strong><a href="https://victoriahunter11.github.io/WeatherDashboard/">Deployed Website</a></strong><br/>
               
              <strong><a href="https://github.com/victoriahunter11/WeatherDashboard">Github repository</a></strong><br/>
  
            </p>
            <div class="column">
              <img src="Assets/Images/Justpick.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
              <br/> <br/>
               <p class="title">Just Pick</p> 
            </div>
            <p class="lead">
             I worked on this with three classmates. We created this app to solve the problem
             of trying to find a place to eat. The user puts the city and state they would like
             to focus on and they are returned a random restaurant. 
              <ul class="lead">Tools used:
                <li>JQuery</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <strong><a href="https://michaelwitt.github.io/Just-Pick/">Deployed Website</a></strong><br/>
               
              <strong><a href="https://github.com/MichaelWitt/Just-Pick">Github repository</a></strong><br/>
  
              </p>
              <div class="column">
                <img src="Assets/Images/codequizTest.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
                <br/> <br/>
                 <p class="title">Coding Quiz</p> 
                </div>
              <p class="lead">
               This is a code quiz I created that tests a player's knowledge of coding.
               It includes a timer and score counter.
                <ul class="lead">Tools used:
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
                <strong><a href="https://victoriahunter11.github.io/CodeQuiz/">Deployed Website</a></strong><br/>
               
                 <strong><a href="https://github.com/victoriahunter11/CodeQuiz">Github repository</a></strong><br/>
             </p>
          </div>
        </div>
      </div>
    )
}

export default Portfolio;