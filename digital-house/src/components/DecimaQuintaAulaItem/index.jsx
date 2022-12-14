import './style.scss'

export function DecimaQuintaAulaItem(props) {
  console.log(props)
  return (
    <div className="decima-quinta-aula-item">
      {/* <h1>Nome do Endereço</h1> */}
      <address>
        {props.data.logradouro} - {props.data.bairro} - {props.data.localidade}(
        {props.data.uf})
      </address>
      <small>{props.data.cep}</small>
      <button onClick={() => props.onDeleteLocation(props.data)}>
        Deletar
      </button>
    </div>
  )
}
