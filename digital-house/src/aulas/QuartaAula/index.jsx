import './style.scss'
import cardImg from './../../assets/images/card.jpeg'
import filtrosImg from './../../assets/images/filtros.jpeg'
import headerImg from './../../assets/images/header.jpeg'

export function QuartaAula() {
  const componentsFound = [
    {
      title: 'Header',
      image: headerImg,
      text: 'Conta com a barra de pesquisa, acesso ao perfil de usuário, e outras funcionalidades'
    },
    {
      title: 'Barra de filtros',
      image: filtrosImg,
      text: 'Apresenta os filtros mais usados pelo usuário'
    },
    {
      title: 'Cards dos videos',
      image: cardImg,
      text: 'Mostra a thumb do video em questao, bem como o titulo, canal e visualizações'
    }
  ]

  return (
    <div className="quarta-aula-component">
      <h1 className="main-title">Componentes identificados</h1>
      <ul className="components-found">
        {componentsFound.map(component => (
          <li>
            <h2>{component.title}</h2>
            <img src={component.image} alt="" />
            <p>{component.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
