import { observer } from 'mobx-react-lite';
import { FC } from 'react'
import { METHOD_STABLE } from '../../lib/constants'
import { spreadCalcThreeSteps } from '../../lib/utils'

const Row: FC<{ticker: string, method: string, base: string}> = ({ticker, base, method}) => {

  const currentMethod = METHOD_STABLE[method]

  return (
    <td 
      className={spreadCalcThreeSteps(ticker, base, currentMethod) > 0 ? 'income' : 'expense'}
      >
        {isNaN(spreadCalcThreeSteps(ticker, base, currentMethod)) ? '' : `${spreadCalcThreeSteps(ticker, base, currentMethod)}%`}
    </td>
  )
}

export default observer(Row)