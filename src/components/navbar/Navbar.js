// import Navlink for using links redirection in navigation menu
import { NavLink } from 'react-router-dom';
// import switching mode button component
import BtnDarkMode from '../btnDarkMode/btnDarkMode';
// Import styles
import './style.css';




const Navbar = () => {


    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link ';

    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                {/* Creating links in navigation menu */}
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>
               
               {/* Mode switching button */}
              <BtnDarkMode/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        {/* Giving the function with parameter to class as value  */}
                        <NavLink to = "/" className = {({isActive})=>{
                            // function will return class depending on link active or not
                            return isActive ? activeLink : normalLink
                            }}>
                            <a href="./index.html" className="nav-list__link nav-list__link--active">Home</a>
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to = '/projects' className = {({isActive}) => {
                            return isActive ? activeLink : normalLink
                        }}>
                            <a href="./projects.html" className="nav-list__link">Projects</a>
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to = '/contacts' className = {({isActive}) => {
                            return isActive ? activeLink: normalLink 
                        }} >  
                            <a href="./contacts.html" className="nav-list__link">Contacts</a>
                        </NavLink>
                     </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}

export default Navbar