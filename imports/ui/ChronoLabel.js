import React from 'react'

export default function(props) {
  
  const {
      handleChange, handleSubmit, displayForm, labelValue
  } = props

	return (
    displayForm ? 
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={labelValue} onChange={handleChange} />
          <input type="submit" value="Envoi" />
        </label>
      </form> :
      <span>{labelValue}</span>
  );
}