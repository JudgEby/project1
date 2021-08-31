import React, { useEffect, useState } from 'react'
import './AnalogClock.scss'

const UseEffectDemo = () => {
	const [isClockVisible, setIsClockVisible] = useState(false)

	return (
		<div>
			<SimpleExample />
			<button
				onClick={() =>
					isClockVisible
						? setIsClockVisible(false)
						: setIsClockVisible(true)
				}
			>
				{isClockVisible ? 'Hide Clock' : 'Show Clock'}
			</button>
			{isClockVisible && (
				<div>
					<AnalogClock />
					<SetTimeoutExample />
				</div>
			)}
		</div>
	)
}

const SimpleExample = () => {
	const [fake, setFake] = useState(1)
	const [counter, setCounter] = useState(1)
	console.log('SimpleExample')
	useEffect(() => {
		console.log('useEffect every render')
		document.title = counter.toString()
	})
	useEffect(() => {
		console.log('useEffect only first render (componentDidMount)')
		document.title = counter.toString()
	}, [])
	useEffect(() => {
		console.log('useEffect first render and every counter change')
		document.title = counter.toString()
	}, [counter])

	return (
		<div>
			{`Hello, counter: ${counter} fake: ${fake}`}
			<button onClick={() => setFake(fake + 1)}>fake +1</button>
			<button onClick={() => setCounter(counter + 1)}>counter +1</button>
		</div>
	)
}

const SetTimeoutExample = () => {
	const [date, setDate] = useState(() => new Date())

	const normalize = (number: number): string =>
		number < 10 ? `0${number}` : `${number}`

	const clock = `${normalize(date.getHours())}:${normalize(
		date.getMinutes()
	)}:${normalize(date.getSeconds())}`

	useEffect(() => {
		const intId = setInterval(() => {
			setDate(new Date())
		}, 1000)

		return () => {
			clearInterval(intId)
		}
	}, [])

	return <div>{`Время: ${clock}`}</div>
}

const AnalogClock = () => {
	//helper
	const stateConstructor = (date: Date) => ({
		seconds: date.getSeconds(),
		minutes: date.getMinutes(),
		hours: date.getHours(),
	})

	const [{ hours, minutes, seconds }, setDate] = useState(() => {
		const currentDate = new Date()
		return stateConstructor(currentDate)
	})

	useEffect(() => {
		const intId = setInterval(() => {
			setDate(stateConstructor(new Date()))
		}, 1000)

		return () => {
			clearInterval(intId)
		}
	}, [])

	const secondsStyle = {
		transform: `rotate(${seconds * 6}deg)`,
	}
	const minutesStyle = {
		transform: `rotate(${minutes * 6}deg)`,
	}
	const hoursStyle = {
		transform: `rotate(${hours * 30}deg)`,
	}

	return (
		<div className={'clock'}>
			<div className={'analog-clock'}>
				<div className={'dial pupka'} />
				<div className={'dial seconds'} style={secondsStyle} />
				<div className={'dial minutes'} style={minutesStyle} />
				<div className={'dial hours'} style={hoursStyle} />
			</div>
		</div>
	)
}

export default UseEffectDemo
