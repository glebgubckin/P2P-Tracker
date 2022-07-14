import { FC } from 'react'
import { DataType } from "./AllMethods"
import { spreadCalc } from "../lib/utils"

const Row: FC<{data: DataType[], a: number, b: number}> = ({data, a, b}) => {
  return (
    <td 
      className={Number(spreadCalc(data[a].price, data[b].minPrice)) > 0 ? 'income' : 'expense'}
      >
      {spreadCalc(data[a].price, data[b].minPrice) + '%'}
    </td>
  )
}

export default Row