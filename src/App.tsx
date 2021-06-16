import React from 'react'
import style from './App.module.css'
import Accordion from './components/Accordion/Accordion'
import Rating from './components/Rating/Rating'
import OnOff from './components/OnOff/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating'

type PageTitleType = {
  title: string
}

const PageTitle = ({ title }: PageTitleType) => {
  return <h1>{title}</h1>
}

const App = () => {
  return (
    <div className={style.app}>
      <PageTitle title={'This is App'} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={'Menu1'} collapsed={false} />
      <UncontrolledAccordion titleValue={'Menu2'} />
      Article 2
      <UncontrolledRating />
      <OnOff />
    </div>
  )
}

export default App
