import React, { useState } from 'react'
import style from './UncontrolledOnOff.module.css'

type UncontrolledOnOffType = {
  onChange: (boolean: boolean) => void
}

const UncontrolledOnOff = ({ onChange }: UncontrolledOnOffType) => {
  const [isOn, setIsOn] = useState<boolean>(false)

  const switchClickHandler = (value: boolean) => {
    setIsOn(value)
    onChange(value)
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

export default UncontrolledOnOff
