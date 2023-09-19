import ProjectCard from '../ProjectCard'
import './ProjectComp.css'

const ProjectComp = () => {
    return (
        <div className='project'>
            <section id='projects' className='heading-sec'>
                <h1>Projetos</h1>
                <div className='content-separator'></div>
            </section>
            <section className='cards'>
                <ProjectCard
                    title={'Projeto com AMQP'}
                    desc={'A aplicação foi desenvolvida como um sistema distribuído com um Produtor e um Consumidor. O Produtor lê um arquivo CSV contendo dados de transações financeiras e os converte em eventos. A implementação utiliza o RabbitMQ para a comunicação entre os componentes, utilizando filas para troca de mensagens.'}
                    gitLink={'https://github.com/ojaomarco/amqp-project/tree/master'}
                    link={'https://www.youtube.com/watch?v=xbkyv79uJpc&ab_channel=Jo%C3%A3oMarcos'}
                    src={'/arch.png'}
                />
                <ProjectCard
                    title={'WebService SpringBoot'}
                    desc={'Foi desenvolvida uma Web API REST para gerenciar o ciclo de vida de informações de boletins de ocorrência policial. O projeto foi implementado em Java com o uso do framework Spring Boot.'}
                    gitLink={'https://github.com/ojaomarco/ws-boletim-furto-veiculo'}
                    link={''}
                    src={'/api.png'}
                />
                <ProjectCard
                    title={'ChatBot Telegram'}
                    desc={'O projeto consistiu no inicio do desenvolvimento de um bot para o Telegram, o bot era um assistente pessoal e permitia ao usuário fazer algumas automatizações básicas.'}
                    gitLink={'https://github.com/ojaomarco/projeto-bd'}
                    link={''}
                    src={'/telegram.png'}
                />
                <ProjectCard
                    title={'Jogo Multiplayer'}
                    desc={'Simples jogo multiplayer com a utilização de sockets. Foi um projeto para desenvolver habilidades em JS utilizando Sockets.io.'}
                    gitLink={'https://github.com/ojaomarco/meu-primeiro-jogo-multiplayer'}
                    link={'https://meu-primeiro-jogo-multiplayer-plum.vercel.app/'}
                    src={'/jogo-multiplayer.png'}
                />
            </section>
        </div>
    )
}

export default ProjectComp