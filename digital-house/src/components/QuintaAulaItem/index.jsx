export function QuintaAulaItem(props) {
  console.log(props)

  return (
    <li>
      <h2>{props.item.title}</h2>
      <img src={props.item.image} alt="" />
      <p>{props.item.text}</p>
    </li>
  )
}
