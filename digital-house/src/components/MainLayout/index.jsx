import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout() {
  // const items = [
  //   { id: 1, name: 'Reportagem 1' },
  //   { id: 2, name: 'Reportagem 2' }
  // ]

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <div className="main-layout-component">
      <header className="main-layout-component-header">
        <h1>Aulas de Front-End III</h1>
        {/* {items.map(item => {
          return (
            <>
              <Link to={`decima-quinta-aula/${item.id}`}>{item.name}</Link>
              <br />
            </>
          )
        })} */}

        {posts.map(post => (
          <div>
            <Link to={`json-placeholder/${post.id}`}>{post.name}</Link>
            {/* <h3>{post.name}</h3> */}
          </div>
        ))}
      </header>

      <section>
        <aside className="menu">
          <ul className="lista-menu">
            <li>
              <Link to="loja-games">Atividade: Loja Games STIM</Link>
            </li>
            <li>
              <Link to="setima-aula">7º aula</Link>
            </li>
            <li>
              <Link to="oitava-aula">8ª Aula</Link>
            </li>
            <li>
              <Link to="pedido-pizza">Atividade: Pedido Pizza</Link>
            </li>
            <li>
              <Link to="decima-terceira-aula">13ª Aula</Link>
            </li>
            <li>
              <Link to="decima-quarta-aula">14ª Aula</Link>
            </li>
            <li>
              <Link to="decima-quinta-aula">15ª Aula</Link>
            </li>
            <li>
              <Link to="to-do">Aula Extra: To Do</Link>
            </li>
            <li>
              <Link to="odonto-clinica">Odonto Clinica</Link>
            </li>

            <select>
              {posts.map(post => (
                <option>
                  <Link to={`json-placeholder/${post.id}`}>{post.name}</Link>

                  {/* <h3>{post.name}</h3> */}
                </option>
              ))}
            </select>

            <li>
              {/* <Link to={`decima-quinta-aula/${item.id}`}>{item.name}</Link> */}
            </li>
          </ul>
        </aside>

        <main className="main-layout-component-main">
          <p>Conteúdo filho:</p>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
