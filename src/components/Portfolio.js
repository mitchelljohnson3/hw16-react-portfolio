import React from 'react';
import Project from './Project';

const projectData = [
  {
      title: "Rendezvous App",
      info: "Social Networking App that allows users to find other users by matching results from a short survey about the users interests and location.",
      link: "https://github.com/mitchelljohnson3/project2"
  },
  {
    title: "MySQL C.M.S.",
    info: "Command line tool that accesses your local MySQL server database, using the inquirer NPM package to select different database queries",
    link: "https://github.com/mitchelljohnson3/hw10-employee-manager"
  },
  {
    title: "Notes API Using Express",
    info: "Node server using express that allows the user to submit, retrieve and delete notes stored in a JSON file managed by the server",
    link: "https://github.com/mitchelljohnson3/hw9-note-taker"
  },
  {
    title: "Crime Radar",
    info: "Interactive website that allows users to access worldwide crime statistics given a latitude and longitude",
    link: "https://github.com/mitchelljohnson3/project-1"
  },
  {
    title: "Weather Dashboard",
    info: "Input the name of any city in the world, and this website will return a weather forecast of the current day, as well as the next 5 days",
    link: "https://github.com/mitchelljohnson3/hw6-weather-dashboard"
  },
  {
    title: "NYT Article Search",
    info: "Interactive website that takes a keyword to search for, a number of articles to be returned, a start year, and an end year",
    link: "https://github.com/mitchelljohnson3/NYTSearch"
  }
];

class Portfolio extends React.Component {
  render() {
    return (
      <div className='projectPage'>
        {projectData.map((data) => {
          return <Project data={data}/>
        })}
        
      </div>
    );
  }
}

export default Portfolio;
