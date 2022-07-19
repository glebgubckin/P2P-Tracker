import { DataType } from "../../types"
import RowMin from "../Row/RowMin"

const RowData = ({ticker, data, minData}: {ticker: string, data: DataType[], minData: DataType[]}) => {
  return (
    <tr>
      <td className={ticker.toLocaleLowerCase()}>{ticker}</td>
      <RowMin data={data} minData={minData} a={0} b={0} />
      <RowMin data={data} minData={minData} a={1} b={1} />
      <RowMin data={data} minData={minData} a={2} b={2} />
      <RowMin data={data} minData={minData} a={3} b={3} />
    </tr>
  )
}

export default RowData