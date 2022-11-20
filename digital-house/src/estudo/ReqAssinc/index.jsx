import React, { useEffect, useState } from 'react'

export function ReqAssinc() {
  const [tipoInfo, setTipoInfo] = useState('users')
  const [vetor, setVetor] = useState([])

  // const getData = async () => {
  //   const data = await fetch(`https://jsonplaceholder.typicode.com/${tipoInfo}`)
  //   const convert = await data.json()
  //   setVetor(convert)
  // }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tipoInfo}`)
      .then(response => response.json())
      .then(json => setVetor(json))
  }, [tipoInfo])

  return (
    <>
      <div>
        <button onClick={() => setTipoInfo('comments')}>Comments</button>
        <button onClick={() => setTipoInfo('users')}>Users</button>
        <button onClick={() => setTipoInfo('posts')}>Posts</button>
      </div>

      {vetor.map(item => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </>
  )
}
