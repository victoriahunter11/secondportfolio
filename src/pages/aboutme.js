import React from "react";
import me from "../imgs/me.png";

function AboutMe() {
    return (
        <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
             <img src={me} alt="Victoria's graduation photo" class="rounded float-sm-left mr-2 img-fluid" />
            
          <h2>About Me</h2>
          <p class="lead"> Hi! My name is Victoria Hunter. I am an East Carolina University graduate,
            where I majored in Management Information Systems.
             I am currently an Associate Software Engineer
            at Allscripts, and also a student in the UNC-Chapel Hill Full-Stack Coding Bootcamp.
            Here, you can find some of my work, as well as links to contact me. Enjoy!
          </p>
        </div>
     </div>
     </div>
   </section> 

   
    )
}

export default AboutMe;