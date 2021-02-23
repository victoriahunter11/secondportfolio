import React from "react";
import Pdf from "../imgs/2020BootcampResume21.pdf";

function Contact() {
    return (
        
    <div class="container" style={{height: 800}}>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2>Contact Info</h2>
        <p class="lead">
          <br/>
          Cell: 704-477-9924<br/>
          Email:
          <strong><a href = "mailto: victoria.jane09@gmail.com">victoria.jane09@gmail.com</a>
          </strong>
          <br/>
          <strong><a href="https://www.linkedin.com/in/victoria-hunter-a71798154">LinkedIn</a></strong><br/>
           
          <strong><a href="https://github.com/victoriahunter11">GitHub</a></strong><br/>
          <a href = {Pdf} target = "_blank">Download Resume Pdf</a>        </p>
      </div>
    </div>
  </div>
    )
}

export default Contact;