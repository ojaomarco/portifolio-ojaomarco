import ProjectCard from '../ProjectCard'
import './ProjectComp.css'

const ProjectComp = () => {
    return (
        <div className='project'>
            <section className='heading-sec'>
                <h1>Projetos</h1>
                <div className='content-separator'></div>
            </section>
            <section className='cards'>
                <ProjectCard
                    title={'Projeto 1'}
                    desc={'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '}
                    gitLink={''}
                    link={''}
                />
                <ProjectCard
                    title={'Projeto 2'}
                    desc={'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '}
                    gitLink={''}
                    link={''}
                />
                <ProjectCard
                    title={'Projeto 2'}
                    desc={'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '}
                    gitLink={''}
                    link={''}
                />
                <ProjectCard
                    title={'Projeto 2'}
                    desc={'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '}
                    gitLink={''}
                    link={''}
                />
            </section>
        </div>
    )
}

export default ProjectComp