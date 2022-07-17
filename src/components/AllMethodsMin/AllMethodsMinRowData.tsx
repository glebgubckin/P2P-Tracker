import { DataType } from "../../types"
import { FC } from 'react';
import RowMin from "../Row/RowMin"

const RowData: FC<{ticker: string, data: DataType[], minData: DataType[]}> = ({ticker, data, minData}) => {

  return (
    <tr>
      <td className={ticker.toLocaleLowerCase()}>{ticker}</td>
      <RowMin data={data} minData={minData} a={0} b={1} />
      <RowMin data={data} minData={minData} a={0} b={2} />
      <RowMin data={data} minData={minData} a={0} b={3} />
      <RowMin data={data} minData={minData} a={1} b={0} />
      <RowMin data={data} minData={minData} a={1} b={2} />
      <RowMin data={data} minData={minData} a={1} b={3} />
      <RowMin data={data} minData={minData} a={2} b={0} />
      <RowMin data={data} minData={minData} a={2} b={1} />
      <RowMin data={data} minData={minData} a={2} b={3} />
      <RowMin data={data} minData={minData} a={3} b={0} />
      <RowMin data={data} minData={minData} a={3} b={1} />
      <RowMin data={data} minData={minData} a={3} b={2} />
    </tr>
  )
}

export default RowData