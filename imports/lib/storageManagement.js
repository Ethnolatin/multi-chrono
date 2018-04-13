import React from 'react'

export function addSavedChrono() {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos")) || []
	storedChronos.push({})
	const JSONStoredChronos = JSON.stringify(storedChronos)
	localStorage.setItem("storedChronos", JSONStoredChronos)
}


export function deleteSavedChrono(counterIdx) {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos"))
	const newStoredChronos = [
		...storedChronos.slice(0, counterIdx),
	  ...storedChronos.slice(counterIdx + 1)]
	const JSONStoredChronos = JSON.stringify(newStoredChronos)
	localStorage.setItem("storedChronos", JSONStoredChronos)
}


export function saveLabel(counterIdx, label) {
	updateSavedChronos(counterIdx, "label", label)
}


export function saveStart(counterIdx, startTime) {
	updateSavedChronos(counterIdx, "startTime", startTime)
	updateSavedChronos(counterIdx, "stopTime", null)
}


export function saveStop(counterIdx, stopTime) {
	updateSavedChronos(counterIdx, "stopTime", stopTime)
}


export function saveLap(counterIdx, lapDisplay) {
	updateSavedChronos(counterIdx, "lapDisplay", lapDisplay)
}

export function getInitialData() {
  const storedChronos = JSON.parse(localStorage.getItem("storedChronos"))
	  				console.log(storedChronos)
  const items = []
  const initialData = []
  if (storedChronos) {
	  for (let i = 0; i < storedChronos.length; i++) {
	  	const newItem = {id: Date.now()+i}
	  	items.push(newItem)
	  	const newData = {
				labelValue:  storedChronos[i].label,
				time: 			 getTime(storedChronos[i]),
				timeDisplay: getTimeDisplay(storedChronos[i]),
				started: 		 isRunning(storedChronos[i]),
				lap: 				 !!storedChronos[i].lapDisplay,
				displayForm: !storedChronos[i].label
			}
			initialData.push(newData)
	  }
	}
  return {items: items, initialData: initialData}
}


function updateSavedChronos(counterIdx, key, value) {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos"))
	storedChronos[counterIdx][key] = value
	const JSONStoredChronos = JSON.stringify(storedChronos)
	localStorage.setItem("storedChronos", JSONStoredChronos)
}


const getTime = ({startTime, stopTime}) => (
	!startTime ?
		0
	: (
			(isRunning({startTime, stopTime}) ?
				Date.now()
			: stopTime)
			-startTime
		)/1000
)

const getTimeDisplay = ({lapDisplay, startTime, stopTime}) => (
	!lapDisplay ?
		getTime({startTime, stopTime})
	: lapDisplay
)

const isRunning = ({startTime, stopTime}) => !!startTime && !stopTime
