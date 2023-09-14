import { Link } from '@mui/material';
import './ProjectCard.css'
import logo from './pepsi.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard = (props) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='card-title'>
                <h1>{props.title}</h1>
            </div>

            <div className='card-separator' />

            <div className='card-desc'>
                <p>{props.desc}</p>
            </div>

            <div className='card-links'>
                <Link href={props.gitLink} color={'#000'}  target="_blank" >
                    <GitHubIcon fontSize='large' />
                </Link>
                <Link href={props.gitLink} color={'#000'}  target="_blank" >
                    <LinkIcon fontSize='large' />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard