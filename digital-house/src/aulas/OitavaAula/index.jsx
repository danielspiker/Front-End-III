import './style.scss'
import { useState } from 'react'
import { SetimaAulaCardProduto } from './../../components/SetimaAulaCardProduto'

export function OitavaAula() {
  const [nomeProduto, setNomeProduto] = useState('')
  const [precoProduto, setPrecoProduto] = useState('')
  const [fotoProduto, setFotoProduto] = useState('')

  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      name: 'Xbox',
      price: '3.000',
      picture:
        'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
    },
    {
      id: 2,
      name: 'Playstation 5',
      price: '5.000',
      picture:
        'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
    },
    {
      id: 3,
      name: 'Switch',
      price: '2.000',
      picture:
        'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    }
  ])

  function cadastrarProduto(e) {
    e.preventDefault()
    const novoProdutoCadastrado = {
      name: nomeProduto,
      price: precoProduto,
      picture: fotoProduto
    }
    setAllProducts([...allProducts, novoProdutoCadastrado])

    setNomeProduto('')
    setPrecoProduto('')
    setFotoProduto('')
  }

  return (
    <main className="setima-aula-component">
      <div className="tittle-wrapper">
        <h1>Produtos</h1>
      </div>
      <form onSubmit={cadastrarProduto}>
        <div>
          <label htmlFor="nomeProduto">Nome</label>
          <input
            value={nomeProduto}
            id="nomeProduto"
            type="text"
            onChange={evento => setNomeProduto(evento.target.value)}
          />
        </div>
        <div>
          <label htmlFor="precoProduto">Preço</label>
          <input
            value={precoProduto}
            id="precoProduto"
            type="text"
            onChange={evento => setPrecoProduto(evento.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fotoProduto">Foto</label>
          <input
            value={fotoProduto}
            id="fotoProduto"
            type="text"
            onChange={evento => setFotoProduto(evento.target.value)}
          />
        </div>
        <button>Cadastrar produto</button>
      </form>

      <section className="products">
        {allProducts.map(product => {
          return <SetimaAulaCardProduto productData={product} />
        })}
      </section>
    </main>
  )
}
