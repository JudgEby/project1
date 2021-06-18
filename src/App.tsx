import React, { useState } from 'react'
import style from './App.module.css'
import Accordion from './components/Accordion/Accordion'
import Rating from './components/Rating/Rating'
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating'
import OnOff from './components/OnOff/OnOff'

type PageTitleType = {
  title: string
}

const PageTitle = ({ title }: PageTitleType) => {
  return <h1>{title}</h1>
}

const App = () => {
  const [ratingValue, setRatingValue] = useState<number>(0)
  const [isAccordionCollapsed, setIsAccordionCollapsed] =
    useState<boolean>(true)
  const [isOn, setIsOn] = useState<boolean>(true)

  return (
    <div className={style.app}>
      <PageTitle title={'This is App'} />
      Article 1
      <Rating value={ratingValue} changeRatingHandler={setRatingValue} />
      <Accordion
        titleValue={'Menu1'}
        collapsed={isAccordionCollapsed}
        toggleCollapsed={() => setIsAccordionCollapsed(!isAccordionCollapsed)}
      />
      <OnOff isOn={isOn} setIsOn={setIsOn} />
      {/*<UncontrolledAccordion titleValue={'Menu2'} />*/}
      {/*Article 2*/}
      {/*<UncontrolledRating />*/}
      {/*<UncontrolledOnOff />*/}
    </div>
  )
}

export default App
