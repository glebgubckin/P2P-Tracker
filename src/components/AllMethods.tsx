import { FC, useContext } from 'react';
import RowData from './AllMethodsRowData'
import { Context } from '../main'
import { observer } from 'mobx-react-lite';

export type DataType = {
  method: string,
  price: number,
  minPrice: number
}


const AllMethods: FC<{loading: boolean}> = ({loading}) => {

  const { crypto } = useContext(Context)

  return (
    <div className="stats">
      <h2 className="stats__title">С платежки А на платежку B</h2>
      <table className="stats__table">
        <tr>
          <th>Актив</th>
          <th>С Тинькофф на Росбанк</th>
          <th>С Тинькофф на ЮМоней</th>
          <th>С Тинькофф на QIWI</th>
          <th>С Росбанка на Тинькофф</th>
          <th>С Росбанка на ЮМоней</th>
          <th>С Росбанка на QIWI</th>
          <th>С QIWI на Тинькофф</th>
          <th>С QIWI на Росбанк</th>
          <th>С QIWI на ЮМоней</th>
          <th>С ЮМоней на Тинькофф</th>
          <th>С ЮМоней на Росбанк</th>
          <th>С ЮМоней на QIWI</th>
        </tr>
        <tbody>
          {
            loading
            ? <tr><th>Загрузка данных...</th></tr>
            : crypto.p2pData.map((el, index) => {
              return <RowData key={index} ticker={el.ticker} data={el.data} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default observer(AllMethods)