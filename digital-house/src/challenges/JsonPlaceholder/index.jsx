import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

export const JsonPlaceholder = () => {
  const [posts, setPosts] = useState([])
  // const [postId, setPostId] = useState(1)

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [posts])

  return (
    <div className="card-user">
      <div>
        {/* <button onClick={() => setPostId(1)}>Post 1</button>
        <button onClick={() => setPostId(2)}>Post 2</button>
        <button onClick={() => setPostId(3)}>Post 3</button> */}
        <h1 className="card-title">Usuário:</h1>
      </div>

      <div>
        <h3>Nome: </h3>
        <h4>{posts.name}</h4>
        <h3>Username: </h3>
        <h4>{posts.username}</h4>
        {/* <h3>Endereço: </h3>
        <h5>Rua: {posts.address.street}</h5>
        <h5>Cidade: {posts.address.city}</h5> */}
        <h3>E-mail: </h3>
        <h4>{posts.email}</h4>
      </div>
    </div>
  )
}
