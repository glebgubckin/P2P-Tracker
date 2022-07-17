import { FC, useContext } from 'react';
import RowData from './ThreeStepsRowData'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'


const ThreeSteps: FC<{loading: boolean}> = ({loading}) => {

  const { crypto } = useContext(Context)
  const METHODS = ['Тинькофф', 'Росбанк', 'QIWI', 'ЮМоней']

  return (
    <div className="stats">
      <h2 className="stats__title">Покупаем крипту A, меняем по маркету на крипту B, продаем</h2>
      <table className="stats__table">
        <tr>
          <th>Актив</th>
          <th>USDT &gt; BTC</th>
          <th>USDT &gt; BUSD</th>
          <th>USDT &gt; BNB</th>
          <th>USDT &gt; ETH</th>
          <th>USDT &gt; RUB</th>
          <th>USDT &gt; SHIB</th>
        </tr>
        <tbody>
          {
            crypto.p2pData.map((el, index) => <RowData key={index} methods={METHODS} data={el.data} minData={crypto.p2pDataMin[index].data} market={crypto.marketPrice} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default observer(ThreeSteps)