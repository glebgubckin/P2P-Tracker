import { FC } from 'react'
import { DataType } from "../../types"
import { spreadCalcTwoSteps } from "../../lib/utils"

const RowMin: FC<{data: DataType[], minData: DataType[], a: number, b: number}> = ({data, minData, a, b}) => {
  return (
    <td 
      className={Number(spreadCalcTwoSteps(data[a].price, minData[b].minPrice)) > 0 ? 'income' : 'expense'}
      >
      {spreadCalcTwoSteps(data[a].price, minData[b].minPrice) + '%'}
    </td>
  )
}

export default RowMin