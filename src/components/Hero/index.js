import BlackButton from '../BlackButton'
import './Hero.css'

const Hero = () => {
    return (
        <div className='content'>
            <div className='content-header'>
                <h1>João Marcos</h1>
            </div>
            <div className='content-separator'>
            </div>
            <div className='content-text'>
                <p>
                    teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                    teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                    teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                </p>
            </div>
            <div className='content-buttons'>
                <BlackButton text='Projetos' />
                <BlackButton text='Contato' />
            </div>
        </div>
    )
}

export default Hero