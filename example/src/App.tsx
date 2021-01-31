import React, { useEffect } from 'react'
import RNChangs, { Counter } from 'rn-changs-yinyang-rollover-x'

const App = () => {
  useEffect(() => {
    console.log(RNChangs)
  })

  return <Counter label='Greetings' />
}

export default App
