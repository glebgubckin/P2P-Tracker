import { DataType } from "../../types"
import Row from "../Row/Row"

const RowData = ({ticker, data}: {ticker: string, data: DataType[]}) => {
  return (
    <tr>
      <td className={ticker.toLocaleLowerCase()}>{ticker}</td>
      <Row data={data} a={0} b={1} />
      <Row data={data} a={0} b={2} />
      <Row data={data} a={0} b={3} />
      <Row data={data} a={1} b={0} />
      <Row data={data} a={1} b={2} />
      <Row data={data} a={1} b={3} />
      <Row data={data} a={2} b={0} />
      <Row data={data} a={2} b={1} />
      <Row data={data} a={2} b={3} />
      <Row data={data} a={3} b={0} />
      <Row data={data} a={3} b={1} />
      <Row data={data} a={3} b={2} />
    </tr>
  )
}

export default RowData