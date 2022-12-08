import { useState, useEffect } from 'react'

export function DecimaTerceiraAula() {
  const [contador, setContador] = useState(0)
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  function adicionar() {
    setContador(contador + 1)
  }

  useEffect(() => {
    if (usuario.length > 10) {
      setErro(true)
    } else {
      setErro(false)
    }
  }, [usuario])

  return (
    <>
      <h2> O valor agora é {contador}</h2>
      <button onClick={adicionar}>Atualizar Contador</button>

      <div>
        <input
          type="text"
          placeholder="escreva até 10 caracteres"
          onChange={e => setUsuario(e.target.value)}
        />
        <h2>{usuario}</h2>
        {erro ? <small>Ocorreu erro</small> : null}
      </div>
    </>
  )
}
