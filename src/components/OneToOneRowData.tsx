import { DataType } from "./AllMethods"
import { spreadCalc } from "../lib/utils"

const RowData = ({ticker, data, minData}: {ticker: string, data: DataType[], minData: DataType[]}) => {
  return (
    <tr>
      <td className={ticker.toLocaleLowerCase()}>{ticker}</td>
      <td 
        className={Number(spreadCalc(data[0].price, minData[0].minPrice)) > 0 ? 'income' : 'expense'}
        >
        {spreadCalc(data[0].price, minData[0].minPrice) + '%'}
      </td>
      <td 
        className={Number(spreadCalc(data[1].price, minData[1].minPrice)) > 0 ? 'income' : 'expense'}
        >
        {spreadCalc(data[1].price, minData[1].minPrice) + '%'}
      </td>
      <td 
        className={Number(spreadCalc(data[2].price, minData[2].minPrice)) > 0 ? 'income' : 'expense'}
        >
        {spreadCalc(data[2].price, minData[2].minPrice) + '%'}
      </td>
      <td 
        className={Number(spreadCalc(data[3].price, minData[3].minPrice)) > 0 ? 'income' : 'expense'}
        >
        {spreadCalc(data[3].price, minData[3].minPrice) + '%'}
      </td>
    </tr>
  )
}

export default RowData