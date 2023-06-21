// Import images
// import component example of project 
import Project from '../project/project';
// Import list(array) of project(objects)
import {projects} from '../../helpers/projects-list';

const Projects = () => {
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
            {projects.map((project,index)=>{
                return <Project 
                key={index} 
                title = {project.title} 
                img={project.img}
                index = {index}/>
                })}
            
            </ul>
        </div>
    </main>
    )
}

export default Projects