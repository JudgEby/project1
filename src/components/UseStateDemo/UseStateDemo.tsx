import React, { useState } from 'react'

const UseStateDemo = () => {
  return (
    <div>
      <Example1 />
    </div>
  )
}

const generateData = () => {
  return 32554646111
}
const Example1 = () => {
  // const initialValue = useMemo(generateData, [])
  const [counter, setCounter] = useState(generateData)
  const changer = (state: number): number => state + 1
  return (
    <div>
      Example 1<button onClick={() => setCounter(changer)}>+1</button>
      {counter}
    </div>
  )
}

export default UseStateDemo
