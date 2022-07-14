import { FC, useContext } from 'react';
import RowData from './OneToOneRowData'
import { Context } from '../main'
import { observer } from 'mobx-react-lite';

export type DataType = {
  method: string,
  price: number,
  minPrice: number
}


const OneToOne: FC<{loading: boolean}> = ({loading}) => {

  const { crypto } = useContext(Context)

  return (
    <div className="stats">
      <h2 className="stats__title">С платежки А на платежку A (от 1000)</h2>
      <table className="stats__table">
        <tr>
          <th>Актив</th>
          <th>С Тинькофф на Тинькофф</th>
          <th>С Росбанка на Росбанк</th>
          <th>С ЮМоней на ЮМоней</th>
          <th>С QIWI на QIWI</th>
        </tr>
        <tbody>
          {
            loading
            ? <tr><th>Загрузка данных...</th></tr>
            : crypto.p2pData.map((el, index) => {
              return <RowData key={index} ticker={el.ticker} data={el.data} minData={crypto.p2pDataMin[index].data} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default observer(OneToOne)