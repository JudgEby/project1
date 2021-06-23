import React from 'react'
import style from './OnOff.module.css'

export type OnOffType = {
  isOn: boolean
  setIsOn: (bool: boolean) => void
}

const OnOff = ({ isOn, setIsOn }: OnOffType) => {
  return (
    <div className={style.onOff}>
      <div
        onClick={() => !isOn && setIsOn(true)}
        className={`${isOn && style.on} ${style.rectangle}`}
      >
        On
      </div>
      <div
        onClick={() => isOn && setIsOn(false)}
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
