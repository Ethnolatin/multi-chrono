import React from 'react'
import ChronoLabel from './ChronoLabel'
import TimeFormat from 'react-time-format'

export default function(props) {
  
  const {
    handleChange, handleSubmit, displayForm, labelValue, timeDisplay, goClickHandler,
    stopClickHandler, lapClickHandler, resetClickHandler, deleteClickHandler, started
  } = props
  const time = new Date(0, 0, 0, 0, 0, Number(timeDisplay))
  
  return (
    <table><tbody><tr>
      <td>
        <ChronoLabel 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          displayForm={displayForm}
          labelValue={labelValue}
          />
      </td>
      <td>
        <TimeFormat
          value={time}
          format='HH:mm:ss'
          />
      </td>
      <td>
        {started &&
          <button onClick={stopClickHandler}>Stop</button>
        || 
          <button onClick={goClickHandler}>Go</button>
        }
      </td>
      <td><button onClick={lapClickHandler}>Lap</button></td>
      <td><button className="red-button" onClick={resetClickHandler}>Reset</button></td>
      <td><button className="black-button" onClick={deleteClickHandler}>Delete</button></td>
    </tr></tbody></table>
  )
}
