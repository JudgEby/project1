import React, { useState } from 'react'
import style from './OnOff.module.css'

const OnOff = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  const switchClickHandler = (value: boolean) => {
    setIsOn(value)
  }
  return (
    <div className={style.onOff}>
      <div
        onClick={() => !isOn && switchClickHandler(true)}
        className={`${isOn && style.on} ${style.rectangle}`}
      >
        On
      </div>
      <div
        onClick={() => isOn && switchClickHandler(false)}
        className={`${!isOn && style.off} ${style.rectangle}`}
      >
        Off
      </div>
      <div className={`${isOn ? style.on : style.off} ${style.circle}`}>
        {''}
      </div>
    </div>
  )
}

export default OnOff
