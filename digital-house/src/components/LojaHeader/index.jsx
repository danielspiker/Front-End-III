import './style.scss'
import gear from './../../assets/images/gear-logo.png'

export function LojaHeader() {
  return (
    <header className="container-header">
      <div className="icon-logo">
        <img src={gear} alt="" />
        <div className="logo">STIM</div>
        <span>®</span>
      </div>

      <div className="menu">
        <ul className="lista-menu">
          <li className="item-menu">STORE</li>
          <li className="item-menu">LIBRARY</li>
          <li className="item-menu">COMMUNITY</li>
          <li className="item-menu">ABOUT</li>
          <li className="item-menu">PROFILE</li>
        </ul>
      </div>
    </header>
  )
}
