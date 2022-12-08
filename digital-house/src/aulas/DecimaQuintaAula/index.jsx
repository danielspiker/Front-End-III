import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'
import { Link, Outlet, useParams } from 'react-router-dom'

export function DecimaQuintaAula() {
  const [locations, setLocations] = useState([])
  const [cep, setCep] = useState('')

  const { id } = useParams()

  function searchCep(e) {
    e.preventDefault()
    setCep(cep)
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
        res.json().then(endereco => setLocations([...locations, endereco]))
      })
    }
  }

  function deleteLocation(currentLocation) {
    console.log(currentLocation)
    const newLocations = locations.filter(
      location => location !== currentLocation
    )
    setLocations(newLocations)
  }

  return (
    <div className="decima-quinta-aula-component">
      <form onSubmit={searchCep}>
        <p>O Id passado é {id}</p>
        <h1>Cadastrar endereços</h1>

        <div>
          <label htmlFor="">Cep</label>
          <input
            type="number"
            value={cep}
            onChange={event => setCep(event.target.value)}
          />
        </div>

        <button>Cadastrar</button>
      </form>

      <section className="locations">
        {locations.map((location, index) => (
          <DecimaQuintaAulaItem
            key={index}
            data={location}
            onDeleteLocation={currentLocation =>
              deleteLocation(currentLocation)
            }
          />
        ))}
      </section>

      <Link to="/decima-quarta-aula">
        <button>Aula Anterior</button>
      </Link>
    </div>
  )
}
