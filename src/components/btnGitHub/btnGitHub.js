// File with button Github component

// import styles
import './style.css'
// import image
import gitImage from '../../img/icons/gitHub-black.svg';

const ButtonGithub = ({link}) => {
    return (
        <a href={link} target = "_blank" rel ="noopener" className="btn-outline">
        <img src={gitImage} alt=""/>
        GitHub repo
        </a>
        
    )
}

export default ButtonGithub;