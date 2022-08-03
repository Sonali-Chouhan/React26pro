
import React,{useEffect} from 'react'
import Context from './Component/Context'
// import Data from './Component/Data'
// import Fatch from './Component/Fatch'
// import GoogleMap from './Component/GoogleMap';
import { useDispatch,useSelector } from 'react-redux';
import { getApi } from './lib/Redux/Action/Action';
import Record from './Component/Record'
const App = () => {
  const dispatch=useDispatch();
  const state = useSelector(state => state.reducer.List);
  console.log("Gg",state)
  useEffect(() => {
  dispatch(getApi());  }, [])
  const data=process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  console.log("data",data)
  return (
    <div>
      {/* <GoogleMap/> */}
      {/* <Data/> */}
      {/* <Fatch/> */}
      {/* <Record/> */}
      <Context/>
    </div>
  )
}

export default App

