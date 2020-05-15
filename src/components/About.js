import React from 'react';
import profilePic from '../img/profile-pic.jpg';

function About() {
  return (
    <div>
      <img className='profile-pic' src={profilePic}></img>
      <p className='about'>I am a perfectionist when it comes to my work. When I start working on a
      project, whether it be a recursive backtracking program to solve a game of sudoku, or a
      simple calculator, the project won’t be finished until every line of code has been
      revised, simplified, and condensed. That’s what I love doing.</p>
      <br></br>
      <p className='about'>There’s nothing quite as satisfying or rewarding to me than struggling
      with a bug in my code for hours on end, only to finally find the issue and fix it. Being
      a computer scientist takes determination and patience, both of which are skills I have
      acquired over the course of my studies.</p>
    </div>
  );
}

export default About;
