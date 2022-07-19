import { FC, useEffect, useContext, useState } from 'react';
import AllMethods from './components/AllMethods/AllMethods'
import AllMethodsMin from './components/AllMethodsMin/AllMethodsMin'
import axios from 'axios'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import OneToOne from './components/OneToOne/OneToOne'
import Sidebar from './components/Sidebar';
import ThreeSteps from './components/ThreeSteps/ThreeSteps';

const App: FC = () => {

  const { crypto } = useContext(Context)
  const [loading, setLoading] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    const makeRequests = async () => {
      const p2p = await axios.get('http://localhost:3500')
      const p2pMin = await axios.get('http://localhost:3500/minThousand')
      const market = await axios.get('http://localhost:3500/market')
      crypto.setP2PData(p2p.data)
      crypto.setP2PDataMin(p2pMin.data)
      crypto.setMarketPrice(market.data)
      const date = new Date()
      const time = date.toTimeString()
      setCurrentTime(time.split(' ')[0].slice(0,5))
      setLoading(false)
    }

    makeRequests()

    setInterval(() => {
      makeRequests()
    }, 180000)
  }, [])

  return (
    <div className="app">
      <div className="app__layout">
        <Sidebar />
        <div className="app__wrapper">
          <h1 className="app__title">P2P Трекер</h1>
          <span className="app__refresh">Обновлено: {currentTime} по МСК</span>
          <OneToOne loading={loading} />
          <AllMethods loading={loading} />
          <AllMethodsMin loading={loading} />
          <ThreeSteps base="USDT" />
          <ThreeSteps base="BTC" />
          <ThreeSteps base="BUSD" />
          <ThreeSteps base="BNB" />
          <ThreeSteps base="ETH" />
          <ThreeSteps base="RUB" />
          <ThreeSteps base="SHIB" />
        </div>
      </div>
    </div>
  )
}

export default observer(App)