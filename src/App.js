import React from 'react'
import Global from './components/Global'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Chart from './components/Chart'
import {userData} from "./assets/data/dummyData"



const App = () => {
  return (
    <>
    <Global>
      
      <Home/>
    </Global>

{/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
    </>
  )
}

export default App