import './style.scss'
import banner from './../../assets/images/banner-loja.jpg'

export function LojaBanner() {
  return (
    <section className="banner">
      <img className="img-fundo" src={banner} alt="" />
    </section>
  )
}
