import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
  const [isClockVisible, setIsClockVisible] = useState(false)

  return (
    <div>
      <SimpleExample />
      <button
        onClick={() =>
          isClockVisible ? setIsClockVisible(false) : setIsClockVisible(true)
        }
      >
        {isClockVisible ? 'Hide Clock' : 'Show Clock'}
      </button>
      {isClockVisible && <SetTimeoutExample />}
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
      console.log('tick')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intId)
    }
  }, [])

  return <div>{`Время: ${clock}`}</div>
}

export default UseEffectDemo
