export const spreadCalc = (price: number, minPrice: number): string => {
  const spread = ((minPrice / price) - 1) * 100
  return spread.toFixed(3)
}