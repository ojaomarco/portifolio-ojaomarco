import BlackButton from '../BlackButton'
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <h1>João Marcos</h1>
            <div className='frame'>
                <a href='#' className='link'>Home</a>
                <a href='#'className='link'>Sobre</a>
                <a href='#'className='link'>Projetos</a>
                <BlackButton />
            </div>
        </div>
    )
}

export default Header