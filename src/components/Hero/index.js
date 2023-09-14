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
                    Material UI and Base UI feature many of the same UI components, but Base UI comes without any default styles or styling solutions.
                    Material UI is comprehensive in that it comes packaged with default styles, and is optimized to work with Emotion (or styled-components).
                    Base UI, by contrast, could be considered the "skeletal" or "headless" counterpart to Material UI—in fact, future versions of Material UI will use Base UI components and hooks for its foundational structure.
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