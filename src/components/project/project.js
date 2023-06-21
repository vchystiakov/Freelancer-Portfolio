// import Navlink for using links in project-page
import { NavLink } from 'react-router-dom';
// import styles
import './style.css';


const Project = ({title,img,index}) => {
    return (
        <NavLink to={`/project/${index}`}>
        <li className="project">
        <a href="./project-page.html">
            <img src={img} alt={title} className="project__img"/>
            <h3 className="project__title">{title}</h3>
        </a>
    </li>
        </NavLink>
    );
};

export default Project;