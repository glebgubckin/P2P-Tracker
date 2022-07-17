export type MarketPrice = {
  symbol: string,
  price: string
}

export type TickerType = {
  ticker: string,
  data: DataType[]
}

export type DataType = {
  method: string,
  price: number,
  minPrice: number
}