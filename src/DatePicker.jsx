import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import zhTW from 'date-fns/locale/zh-TW'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zh-TW', zhTW)

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return <DatePicker selected={startDate} onChange={date => setStartDate(date)} locale='zh-TW' />
}

export default ReactDatePicker
