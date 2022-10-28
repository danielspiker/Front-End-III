import './style.scss'
import win from './../../assets/images/windows-icon.svg'
import mac from './../../assets/images/mac-icon.svg'

export function LojaHalloween(props) {
  return (
    <section className="halloween-games">
      <img className="game-pic" src={props.item.picture} alt="" />
      <h3 className="game-name">{props.item.name}</h3>
      <p className="game-categories">{props.item.categories}</p>
      <h3 className="game-price-old">{props.item.oldPrice}</h3>
      <h3 className="game-price">{props.item.newPrice}</h3>
    </section>
  )
}
