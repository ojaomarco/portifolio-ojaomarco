import BlackButton from '../BlackButton'
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <h1>PORTIFÓLIO</h1>
            <div className='frame'>
                <a href='#' className='link'>Home</a>
                <a href='#'className='link'>Sobre</a>
                <a href='#'className='link'>Projetos</a>
                <BlackButton text={'Contato'}/>
            </div>
        </div>
    )
}

export default Header