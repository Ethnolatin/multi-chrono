<<<<<<< HEAD
import React from 'react'
import ChronoLabel from './ChronoLabel'
=======
import React      from 'react'
>>>>>>> change_label
import TimeFormat from 'react-time-format'

export default function(props) {

  const {
<<<<<<< HEAD
    handleChange, handleSubmit, displayForm, labelValue, timeDisplay, goClickHandler,
    stopClickHandler, lapClickHandler, resetClickHandler, deleteClickHandler, started
=======
    handleChange, handleSubmit, labelValue, timeDisplay, goStopClickHandler, goStopLabel,
    lapClickHandler, resetClickHandler, deleteClickHandler
>>>>>>> change_label
  } = props
  const time = new Date(0, 0, 0, 0, 0, Number(timeDisplay))

  return (
    <table><tbody><tr>
<<<<<<< HEAD
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
=======
      <td><input type="text" defaultValue={labelValue} size={12} onFocus={handleChange} onBlur={handleSubmit} /></td>
      <td><TimeFormat value={time} format='HH:mm:ss' /></td>
      <td><button onClick={goStopClickHandler}>{goStopLabel}</button></td>
>>>>>>> change_label
      <td><button onClick={lapClickHandler}>Lap</button></td>
      <td><button className="red-button" onClick={resetClickHandler}>Reset</button></td>
      <td><button className="black-button" onClick={deleteClickHandler}>Delete</button></td>
    </tr></tbody></table>
  )
}
