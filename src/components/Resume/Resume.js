import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="background">
      <div className="paper">
        <div className="FL">
          <h1>Kelly Pressley</h1>
          <br />
          <p>
            <b>Phone: </b>541-510-5914 <b>| Email: </b>KellyPressley86@gmail.com<br />
            <b>LinkedIn: </b><a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/">https://www.linkedin.com/in/kelly-pressley-5490b3184/</a><br />
            <b>GitHub: </b><a href="https://github.com/Kpressley86">https://github.com/Kpressley86</a><br />
          </p>
          <br />
          <h1>Summary</h1>
          <br />
          <p>
            <b>Full Stack Web Developer</b> with a background in Construction. Whether I was pumping gas at 16 or running a crew of 20 men building bridges at 32. I’ve always worked hard to be the best at my job. I love to learn from people who are willing to teach and teach people who are willing to learn.
</p> <br />
          <h1>Technical Skills</h1>
          <br />
          <p>
            <b>Languages: </b>JavaScript, MySQL <br />
            <b>Front-end: </b>HTML5, CSS, Bootstrap <br />
            <b>Back-end: </b>Node.js, Express, React <br />
          </p>
          <br />
          <h1>Projects</h1>
          <br />
          <p>
            <b>Golf Pro | Deployed site:</b> <a href="https://kpressley86.github.io/Greyjoys-Project-1/">https://kpressley86.github.io/Greyjoys-Project-1/</a><br />
            This was our first class project. I was team lead and worked on the “back-end” code.
            My main responsibility was firebase authentication and making API calls. <br />
            <b>Bamazon | GitHub: </b><a href="https://github.com/Kpressley86/bamazon">https://github.com/Kpressley86/bamazon</a><br />
            This is a fake “Amazon” app I created using MySQL and Node.js. <br />
            <b>GifTastic | Deployed site: </b><a href="https://kpressley86.github.io/GifTastic/">https://kpressley86.github.io/GifTastic/</a> <br />
            Any early project I created using API calls to get images from GIPHY.com.
</p>
          <br />
          <h1>Experience</h1>
          <br />
          <p>
            <b>Owner/Operator 2005 - 2015</b><br />
            Pressley Excavation Junction City, OR<br />
            As an owner I had to seek out clients and stay competitive as far as cost, quality, and production.
            Definitely a learning experience for me and taught me a lot of responsibility.
    <br />
            <b>Journeyman Operator 2015 – 2018</b><br />
            Knife River Harrisburg, OR<br />
            My role at Knife River was to manage a crew in a high danger fast paced environment.
            Building and moving concreate that weighed up to 200 thousand pounds!
            I trained guys on safe practices and proper gear to use for each product.
</p>
          <br />
          <h1>Education</h1>
          <br />
          <p>
            <b>University of Arizona Coding Bootcamp</b> <br />
            A 24-week intensive program focused on gaining technical programming skills in HTML5,
            <br /> CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
</p><br />
        </div>
      </div>
    </div>
  )

}

export default Resume;