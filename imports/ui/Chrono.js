import React      from 'react'
import TimeFormat from 'react-time-format'


export default function(props) {
  const {
    timeDisplay, goStopClickHandler, goStopLabel,
    lapClickHandler, resetClickHandler
  } = props
  const time = new Date(0, 0, 0, 0, 0, Number(timeDisplay))
  return (
    <table><tbody><tr>
      <td>
        <TimeFormat value={time} format='HH:mm:ss' />
      </td>
      <td><button onClick={goStopClickHandler}>{goStopLabel}</button></td>
      <td><button onClick={lapClickHandler}>Lap</button></td>
      <td><button className="red-button" onClick={resetClickHandler}>Reset</button></td>
    </tr></tbody></table>
  )
}
