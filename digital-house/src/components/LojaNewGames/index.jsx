import './style.scss'
import win from './../../assets/images/windows-icon.svg'
import mac from './../../assets/images/mac-icon.svg'

export function LojaNewGames(props) {
  return (
    <section className="new-games">
      <img className="game-pic" src={props.item.picture} alt="" />
      <h3 className="game-name">{props.item.name}</h3>
      <img className="icon" src={win} alt="" />
      <img className="icon" src={mac} alt="" />
      <p className="game-categories">{props.item.categories}</p>
      <h3 className="game-price">{props.item.price}</h3>
    </section>
  )
}
