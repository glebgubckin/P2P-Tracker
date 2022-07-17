import { DataType, MarketPrice } from "../../store/CryptoStore"
import { FC } from 'react'

const RowData: FC<{methods: string[], data: DataType[], minData: DataType[], market: MarketPrice[]}> = ({methods, data, minData, market}) => {

  console.log(methods);

  return (
    <tr>
      {/* <td className={ticker.toLocaleLowerCase()}>{ticker}</td> */}
    </tr>
  )
}

export default RowData