import BlackButton from '../BlackButton'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
        <div className='content'>
            <div className='content-header'>
                <h1>João Marcos</h1>
            </div>
            <div className='content-separator'>
            </div>
            <div className='content-text'>
                <p>
                Desenvolvedor Python e Java, especializado em construir aplicações web responsivas e escaláveis. 
                Conhecimentos em frameworks como Django, Spring Boot e na implementação de aplicações de Data Science com Grafana e a poderosa stack Elasticsearch.
  
                </p>
            </div>
            <div className='content-buttons'>
                <BlackButton text='Projetos' />
                <BlackButton text='Contato' />
            </div>
        </div>
        <div className='hero-img'>
            <img src='/main.jpg' width={'500px'} alt='main'></img>
        </div>
        </div>
    )
}

export default Hero