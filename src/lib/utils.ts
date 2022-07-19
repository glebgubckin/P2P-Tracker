import { Context } from "../main"
import { useContext } from "react"

export const spreadCalcTwoSteps = (price: number, minPrice: number): string => {
  const spread = ((minPrice / price) - 1) * 100
  return spread.toFixed(3)
}

export const sortString = (str: string) => {
  return str.split('').sort().join('')
}

export const spreadCalcThreeSteps = (ticker: string, base: string, currentMethod: string): number => {
  const { crypto } = useContext(Context)
  const basePrice = Number(crypto.p2pData.filter(el => el.ticker === base)[0]?.data.filter(el => el?.method === currentMethod)[0]?.price)
  const marketPair = Object.keys(crypto.marketPrice).filter(pair => sortString(pair) === sortString(`${base}${ticker}`))[0]
  const marketPrice = Number(crypto.marketPrice[marketPair]) * 1.001
  const tickerPrice = Number(crypto.p2pData.filter(el => el.ticker === ticker)[0]?.data.filter(el => el?.method === currentMethod)[0]?.minPrice)
  if (marketPair?.indexOf(base)) {
    return Number(((tickerPrice * Number(((1 / basePrice) / marketPrice).toFixed(10)) - 1) * 100).toFixed(3))
  } else {
    return Number(((tickerPrice * Number(((1 / basePrice) * marketPrice).toFixed(10)) - 1) * 100).toFixed(3))
  }
}