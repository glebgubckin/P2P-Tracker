import { FC } from 'react'
import { METHODS, CRYPTOS } from '../../lib/constants'
import Row from "../Row/RowThree"

const RowData: FC<{ baseMethod: string, base: string }> = ({ baseMethod, base }) => {
  return (
    <>
      {
        METHODS.map(method => {
          return (
            <tr>
              <td>{baseMethod} на {method}</td>
              {
                CRYPTOS.filter(ticker => ticker !== base).map((ticker, index) => <Row key={index} ticker={ticker} base={base} method={method} />)
              }
            </tr>
          )
        })
      }
    </>
  )
}

export default RowData