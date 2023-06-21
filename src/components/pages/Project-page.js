// File for seperate component with project page
import { useParams } from 'react-router-dom';
import {projects} from '../../helpers/projects-list';
import ButtonGithub from '../btnGitHub/btnGitHub';


const ProjectPage = () => {
    const {id} = useParams();
    // variable with information about project
    const project = projects[id];
    console.log(project)

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>
                  
                    <img 
                    src={project.imgBig}
                    alt={project.title}
                    className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills} </p>
                </div>

            

                <ButtonGithub link = "https://github.com"/>                

            </div>
        </div>
    </main>

    )
}

export default ProjectPage