import React from "react";
import './pages.css';

function Portfolio() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Projects</h2>
            <div class="column">
              <img src="src/Images/AustinSearch.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
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
              <img src="" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
              <br/> <br/>
               <p class="title">Code Carnival</p> 
            </div>
            <p class="lead">
             I worked on this with four classmates. We wanted to switch our project up and create a fun app. This
             project was a code themed online Carnival. It allowed the user to create a login and account, and once they were in, 
             it allowed them access to several games. We offered pong, blackjack, snake, a fortune teller, and mad libs. I worked specifically
             in the MadLibs game, using a form and Javascript to generate a random story for the user. We used a database,
             express server, user authentification, encryption, and game development. When we were finished, we deployed it through Heroku.
              <ul class="lead">Tools used:
                <li>JQuery</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <strong><a href="https://michaelwitt.github.io/Code-Carnival/">Deployed Website</a></strong><br/>
               
              <strong><a href="https://github.com/MichaelWitt/Code-Carnival">Github repository</a></strong><br/>
  
              </p>
               <div class="column">
              <img src="src/Images/Justpick.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
              <br/> <br/>
               <p class="title">Fitness Tracker</p> 
            </div>
            <p class="lead">
             This was a homework assignment I completed that can be used to track your recent workouts. It allows
             you personalize what workouts you did through type, duration, reps, and more. When you complete your workout,
             it will display on the dashboard so you are able to keep track. 
              <ul class="lead">Tools used:
                <li>API Routes</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Heroku</li>
                <li>Express</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <strong><a href="https://workout-tracker-vjh.herokuapp.com">Deployed Website</a></strong><br/>
               
              <strong><a href="https://github.com/victoriahunter11/fitness-tracker">Github repository</a></strong><br/>
  
              </p>
            <div class="column">
              <img src="src/Images/Justpick.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
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
                <img src="src/Images/codequizTest.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
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
             <div class="column">
                <img src="src/Images/codequizTest.png" alt="Placeholder" class="img-thumbnail mr-sm-2"/>
                <br/> <br/>
                 <p class="title">Employee Tracker</p> 
                </div>
              <p class="lead">
               In this assignment, I created an Employee Tracker through a content management system using
               node, inquirer, and MySQL. This could be used to track a company's employees and add a user by
               department, role, and employee. They also could view them by their different criteria, and delete an
               employee if they wanted to.
                <ul class="lead">Tools used:
                  <li>NodeJS</li>
                  <li>Inquirer</li>
                  <li>MySQL</li>
                </ul>
                <strong><a href="">Youtube Video</a></strong><br/>
               
                 <strong><a href="https://github.com/victoriahunter11/Employee Tracker">Github repository</a></strong><br/>
             </p>
          </div>
        </div>
      </div>
    )
}

export default Portfolio;