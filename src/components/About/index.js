import StackList from '../StackList'
import './About.css'

const About = () => {
    return (
        <div  id='about' className='about-all'>
            <div className='about-img'>
                <img src='/perfil.jpg' width={'300px'} alt='main'></img>
            </div>
            <div className='about'>
                <div className='heading-sec'>
                    <h1>Sobre</h1>
                    <div className='content-separator'></div>
                </div>

                <div className='about-text'>
                    <p>
                        Olá, meu nome é João Marcos, e tenho 21 anos.
                        Desde os 15 anos, desenvolvi um grande interesse pela área de tecnologia da informação,
                        e atualmente, tenho mais de 1 ano de experiência como desenvolvedor Python e automação industrial.
                        <br></br>Estou cursando o 6º período do curso de Sistemas para Internet na Universidade Tecnológica Federal do Paraná (UTFPR) e
                        acumulei experiência profissional significativa no campo do desenvolvimento com a linguagem python e java.
                    </p>
                </div>
                <div className='stack'>
                    <StackList items={['java', 'python', 'spring', 'django', 'node']} />
                </div>
            </div>
            
        </div>
    )
}

export default About