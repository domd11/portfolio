import './App.css';
import { DiReact, DiHtml5, DiCss3, DiJavascript, DiPython, DiJava } from "react-icons/di"
import { TbBrandFirebase, TbBrandNextjs } from "react-icons/tb"
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('service_izcpwj8', 'template_3ceq50e', form.current, 'FEIwVU9DhQfbTKnRk')
    .then(() => {
      alert("Email Sent!")
      e.target.reset();
    })

  }

  return (
    <div className="App">
      <h1>Hello! My name is Dominique Desert</h1>
      <small>A high school freshman, Bergen Community College Freshman, Mechatronics Major, and a web developer</small>

      <div>
        <h2>Languages</h2>
        <DiReact className='language-icon'/>
        <DiHtml5 className='language-icon'/>
        <DiCss3 className='language-icon'/>
        <DiJavascript className='language-icon'/>
        <TbBrandNextjs className='language-icon'/>
        <TbBrandFirebase className='language-icon'/>
        <DiPython className='language-icon'/>
        <DiJava className='language-icon'/>
      </div>
      <hr />
      <div className='container'>
        <h3>The Start: 6th Grade</h3>
        <p>I came across web development on Khan Academy. I started and completed the HTML, CSS and JavaScript Course. In the period of time, I built todo list timers, used APIs and learned about the basics of web developnebt abd DOM. I was able to complete the entire course because I had a lot of time since school was online.</p>
        <h3>7th and 8th Grade</h3>
        <p>I started learning about the types of jobs that you can get with web development. I learned about full-stack devleopment, I liked how they could do both backend and front end. I went into a deep dive about the types of front end and backend languages. I tried Django and ReactjS, after learning both I realized that I liked ReactJS more so I decided to learn it.</p>
        <h3>9th Grade (Present Day)</h3>
        <p>I learned about NextJS and started learning it in September. I have created a plan to learn NextJS, NodeJS, MonogoDB, NoSQL, and TailwindCSS in the course of 2 to 3 years. So far, I have completed learning NextJS and Firebase. I plan to start learning MongoDB in January 2023.</p>
        <hr />
        <h3>Contact Me!</h3>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <input type="text" name="user_name" />
        <br />
        <label>Email: </label>
        <input type="email" name="user_email" />
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
        </div>
    </div>
  );
}

export default App;
