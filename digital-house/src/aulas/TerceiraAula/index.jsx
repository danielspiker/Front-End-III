import './style.scss'
// import header from './../../assets/images/header.jpg'
// import filtros from './../../assets/images/filtros.jpg'
// import card from './../../assets/images/card.jpg'

export function TerceiraAula() {
  const components = [
    {
      name: 'Header',
      description:
        'Conta com a barra de pesquisa, acesso ao perfil de usuário, e outras funcionalidades'
      // image: header
    },
    {
      name: 'Barra de filtros',
      description: 'Apresenta os filtros mais usados pelo usuário'
      // image: filtros
    },
    {
      name: 'Cards dos videos',
      description:
        'Mostra a thumb do video em questao, bem como o titulo, canal e visualizações'
      // image: card
    }
  ]

  return (
    <main>
      <h1>Lista de componentes encontrados no site: YouTube</h1>
      <ul>
        {components.map(component => (
          <li>
            <img src={component.image} />
            <h3>{component.name}</h3>
            <p>{component.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
