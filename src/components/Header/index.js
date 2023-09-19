import BlackButton from '../BlackButton'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import './Header.css'

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  
    return (
      <nav className={isNavExpanded ? "header expanded" : 'header'}>
        <h1>PORTFÓLIO</h1>
        <div className='frame'>
          <a href='#' className='link'>Home</a>
          <a href='#' className='link'>Sobre</a>
          <a href='#' className='link'>Projetos</a>
          <BlackButton text={'Contato'} />
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon fontSize='large' color={'#000'}/>
        </button>
      </nav>
    );
  }
  

export default Header