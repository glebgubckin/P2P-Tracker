import { FC, useContext } from 'react';
import RowData from './ThreeStepsRowData'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'
import { CRYPTOS, METHODS } from '../../lib/constants';

const ThreeSteps: FC<{base: string}> = ({base}) => {

  const { crypto } = useContext(Context)

  return (
    <div className="stats">
      <h2 className="stats__title">Покупаем крипту A, меняем по маркету на крипту B, продаем (от 1000)</h2>
      <table className="stats__table">
        <tr>
          <th>Схема</th>
          {
            CRYPTOS.filter(ticker => ticker !== base).map((ticker, index) => <th key={index}><span className={base.toLocaleLowerCase()}>{base}</span> &gt; <span className={ticker.toLocaleLowerCase()}>{ticker}</span></th>)
          }
        </tr>
        <tbody>
          {
            METHODS.map((method, index) => <RowData key={index} baseMethod={method} base={base} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default observer(ThreeSteps)