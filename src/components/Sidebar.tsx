import { FC } from 'react'
import '../styles/titles.scss'

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <p style={{color: '#fff'}} className="sidebar__block">
        Биржа
      </p>
      <p className="sidebar__block btc">
        Binance
      </p>
      <p className="sidebar__block rub sidebar__soon">
        Huobi <span className="soon">Soon</span>
      </p>
      <p className="sidebar__block usdt">
        Change log
      </p>
    </div>
  )
}

export default Sidebar