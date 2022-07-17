import { action, makeObservable, observable } from "mobx"
import { TickerType, MarketPrice } from '../types'


class CryptoStore {

  public p2pData: TickerType[] = []
  public p2pDataMin: TickerType[] = []
  public marketPrice: MarketPrice[] = []

  constructor() {
    makeObservable(this, {
      p2pData: observable,
      p2pDataMin: observable,
      marketPrice: observable,
      setP2PData: action,
      setP2PDataMin: action,
      setMarketPrice: action,
    })
  }

  setP2PData(data: TickerType[]) {
    this.p2pData = data
  }

  setP2PDataMin(data: TickerType[]) {
    this.p2pDataMin = data
  }

  setMarketPrice(data: MarketPrice[]) {
    this.marketPrice = data
  }
}

export default new CryptoStore()