import React from 'react'
import format from 'date-fns/format'
import DatePicker from './DatePicker'

const App = () => {
  return (
    <div>
      <div>demo {format(new Date(2014, 1, 11), 'MM/dd/yyyy')}</div>
      <DatePicker />
    </div>
  )
}
export default App
