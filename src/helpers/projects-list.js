//File with array of projects

// import images with projects
// project 1
import project1 from '../img/projects/01.jpg';
import project1Big from '../img/projects/01-big.jpg';
// project 2
import project2 from '../img/projects/02.jpg';
import project2Big from '../img/projects/02-big.jpg';
// project 3
import project3 from '../img/projects/03.jpg';
import project3Big from '../img/projects/03-big.jpg';
// project 4
import project4 from '../img/projects/04.jpg';
import project4Big from '../img/projects/04-big.jpg';
// project 5
import project5 from '../img/projects/05.jpg';
import project5Big from '../img/projects/05-big.jpg';
// project 6
import project6 from '../img/projects/06.jpg';
import project6Big from '../img/projects/06-big.jpg';

// Array with objects(projects) and its description
const projects = [
    {   
        title: 'Gaming streaming portal',
        skills: 'React,Node.js,MongoDB',
        img: project1,
        imgBig: project1Big,
        gitHubLink: 'https://github.com'
    },
    {   
        
        title: 'Video service',
        skills: 'React,Php,Mysql',
        img: project2,
        imgBig: project2Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Video portal',
        skills: 'Vue Js,Node.js,Mongo DB',
        img: project3,
        imgBig: project3Big,
        gitHubLink: 'https://github.com'
    },

    {
        
        title: 'Dating App',
        skills: 'React Native',
        img: project4,
        imgBig: project4Big,
        gitHubLink: 'https://github.com'
    },

    {
        
        title: 'Landing',
        skills: 'Css,SCSS,JS',
        img: project5,
        imgBig: project5Big,
        gitHubLink: 'https://github.com'
    },

    {
        
        title: 'Gaming community',
        skills: 'React,Php,Mysql',
        img: project6,
        imgBig: project6Big,
        gitHubLink: 'https://github.com'
    },


]

export {projects}