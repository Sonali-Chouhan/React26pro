
import React from 'react'
// import Data from './Component/Data'
// import Fatch from './Component/Fatch'
// import GoogleMap from './Component/GoogleMap'
import Record from './Component/Record'

const App = () => {
  const data=process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  console.log("data",data)
  return (
    <div>
      {/* <GoogleMap/> */}
      {/* <Data/> */}
      {/* <Fatch/> */}
      <Record/>
    </div>
  )
}

export default App

