import { FC } from 'react'
import { DataType } from "../../types"
import { spreadCalcTwoSteps } from "../../lib/utils"

const Row: FC<{data: DataType[], a: number, b: number}> = ({data, a, b}) => {
  return (
    <td 
      className={Number(spreadCalcTwoSteps(data[a].price, data[b].minPrice)) > 0 ? 'income' : 'expense'}
      >
      {spreadCalcTwoSteps(data[a].price, data[b].minPrice) + '%'}
    </td>
  )
}

export default Row