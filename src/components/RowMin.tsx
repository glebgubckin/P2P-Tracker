import { FC } from 'react'
import { DataType } from "./AllMethods"
import { spreadCalc } from "../lib/utils"

const RowMin: FC<{data: DataType[], minData: DataType[], a: number, b: number}> = ({data, minData, a, b}) => {
  return (
    <td 
      className={Number(spreadCalc(data[a].price, minData[b].minPrice)) > 0 ? 'income' : 'expense'}
      >
      {spreadCalc(data[a].price, minData[b].minPrice) + '%'}
    </td>
  )
}

export default RowMin