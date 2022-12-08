import { useState, useEffect } from 'react'

export function PedidoPizza() {
  const [pedido, setPedido] = useState('')

  function cancelar(e) {
    e.preventDefault
    alert('Seu pedido foi cancelado')
    setPedido('')
  }

  useEffect(() => {
    setTimeout(() => {
      setPedido('pintça')
      console.log('Componente realmente atualizado')
    }, 3000)
  }, [])

  return (
    <>
      <h1>Seu pedido é:</h1>
      <h3>{pedido}</h3>
      <button onClick={cancelar}>Cancelar</button>
    </>
  )
}

// ---------------------------------------

// export function PedidoPizza({ nome }) {
//   nome = 'joia'
//   const mensagem = `Olá, ${nome}!` //elaboramos a mensagem

//   //👇 utilizamos o hook do useEffect
//   useEffect(() => {
//     //forma recomendada para a realização de um efeito
//     document.title = `Cumprimento: ${nome}` // Efeito colateral
//   }, [nome]) //Assim, só será renderizado novamente se houver alguma alteração no prop de “nome”

//   return <div>{mensagem}</div> // Estrutura do componente
// }

// --------------------------------------

// export const PedidoPizza = () => {
//   const [quantidade, setQuantidade] = useState(3)

//   useEffect(() => {
//     setInterval(() => {
//       setQuantidade(prevState => ++prevState)
//     }, 3000)
//     // se o useEffect tiver RETURN, ao atualizar algum elemento, ele eh executado, sendo responsavel por limpar o efeito
//     return setQuantidade(0)
//   }, [])

//   return <div>Quero {quantidade} chocolates</div>
// }
