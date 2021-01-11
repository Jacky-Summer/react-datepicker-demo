import React from 'react'
import moment from 'moment'
import DatePicker from './DatePicker'

const App = () => {
  return (
    <div>
      <div>demo {console.log(moment('11-11-2014', 'MM-DD-YYYY'))}</div>

      <DatePicker />
    </div>
  )
}
export default App
