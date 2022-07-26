
import React from 'react'
import Data from './Component/Data'
import Fatch from './Component/Fatch'
import GoogleMap from './Component/GoogleMap'

const App = () => {
  const data=process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  console.log("data",data)
  return (
    <div>
      {/* <GoogleMap/> */}
      {/* <Data/> */}
      <Fatch/>
    </div>
  )
}

export default App

