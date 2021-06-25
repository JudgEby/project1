import React, { useState } from 'react'
import style from './App.module.css'
import Accordion from './components/Accordion/Accordion'
import Rating from './components/Rating/Rating'
import OnOff from './components/OnOff/OnOff'
import { ItemType, Select } from './components/Select/Select'

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

  const [selectValue, setSelectValue] = useState(null)

  const onSelectChange = (value: any) => {
    setSelectValue(value)
  }

  const onAccordionItemClickHandler = (value: any) => {
    console.log(value)
  }
  const array: ItemType[] = [
    { title: 'Vasja', valueArr: '123' },
    { title: 'Petja', valueArr: '234' },
    { title: 'Zenja', valueArr: '345' },
  ]

  return (
    <div className={style.app}>
      <PageTitle title={'This is App'} />
      Article 1
      <Rating value={ratingValue} changeRatingHandler={setRatingValue} />
      <Accordion
        titleValue={'Menu1'}
        items={[
          { title: '1', value: 1 },
          { title: '22', value: 2 },
          { title: '333', value: 3 },
        ]}
        collapsed={isAccordionCollapsed}
        toggleCollapsed={() => setIsAccordionCollapsed(!isAccordionCollapsed)}
        onAccordionItemClickHandler={onAccordionItemClickHandler}
      />
      {/*<OnOff isOn={isOn} setIsOn={setIsOn} />*/}
      <Select value={selectValue} items={array} onChange={onSelectChange} />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde!
    </div>
  )
}

export default App
