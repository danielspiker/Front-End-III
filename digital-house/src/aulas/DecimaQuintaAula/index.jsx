import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {
  const [locations, setLocations] = useState([])
  const [cep, setCep] = useState('')

  function searchCep(cepRecieved) {
    setCep(cepRecieved)
    if (cepRecieved.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(res => {
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
    <div className="decima-quarta-aula-component">
      <form>
        <h1>Cadastrar endereços</h1>

        <div>
          <label htmlFor="">Cep</label>
          <input
            type="number"
            value={cep}
            onChange={event => searchCep(event.target.value)}
          />
        </div>

        <button onClick={event => searchCep(event.target.value)}>
          Cadastrar
        </button>
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
    </div>
  )
}
