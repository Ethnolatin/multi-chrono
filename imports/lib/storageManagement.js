import React from 'react'

export function addStoredChrono() {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos")) || []
	storedChronos.push({})
	const JSONStoredChronos = JSON.stringify(storedChronos)
	localStorage.setItem("storedChronos", JSONStoredChronos)
}

export function deleteStoredChrono(counterIdx) {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos"))
	const JSONStoredChronos = JSON.stringify([
	        ...storedChronos.slice(0, counterIdx),
	        ...storedChronos.slice(counterIdx + 1)
	])
	localStorage.setItem("storedChronos", JSONStoredChronos)
}

function updateStoredChronos(counterIdx, key, value) {
	const storedChronos = JSON.parse(localStorage.getItem("storedChronos"))
	storedChronos[counterIdx][key] = value
	const JSONStoredChronos = JSON.stringify(storedChronos)
	localStorage.setItem("storedChronos", JSONStoredChronos)
}


export function saveLabel(counterIdx, label) {
	updateStoredChronos(counterIdx, "label", label)
}


export function saveStart(counterIdx, startTime) {
	updateStoredChronos(counterIdx, "startTime", startTime)
}


export function saveStop(counterIdx, stopTime) {
	updateStoredChronos(counterIdx, "stopTime", stopTime)
}


export function saveLap(counterIdx, lapDisplay) {
	updateStoredChronos(counterIdx, "lapDisplay", lapDisplay)
}