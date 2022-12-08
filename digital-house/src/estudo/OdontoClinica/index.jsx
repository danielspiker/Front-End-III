import { useState } from 'react'
import { useEffect } from 'react'
import { odontoUrl } from '../../api'
import './OdontoClinica.scss'

export const OdontoClinica = () => {
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [matricula, setMatricula] = useState('')

  useEffect(() => {
    fetch(odontoUrl)
      .then(response => response.json())
      .then(dado => {
        console.log(dado)
        setDados(dado)
      })
  }, [])

  // const getData = async () => {
  //   const data = await fetch(odontoUrl)
  //   const convert = await data.json()
  //   setDados(convert)
  // }

  const cadastra = e => {
    e.preventDefault()

    console.log('cadastrando...')

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // Authorization: authToken
    }

    const requestBody = JSON.stringify({
      nome,
      sobrenome,
      matricula
    })

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody
    }

    fetch(odontoUrl, requestConfig)
      .then(response => response.json())
      .then(dado => setDados([...dados, dado]))
  }

  return (
    <div className="container">
      <section className="cadastro">
        <h3 className="titulo-card-dentistas">Cadastrar Dentista:</h3>
        <form onSubmit={e => cadastra(e)}>
          <input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="sobrenome"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />
          <input
            type="text"
            placeholder="matricula"
            value={matricula}
            onChange={e => setMatricula(e.target.value)}
          />
          <button>Cadastra</button>
        </form>
      </section>

      <section className="card-dentistas">
        <h3 className="titulo-card-dentistas">Dentistas Cadastrados:</h3>
        <ul className="lista-card-dentistas">
          {dados.map(dado => (
            <li className="card-dentistas-item" key={dado.id}>
              {dado.nomecompleto}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
