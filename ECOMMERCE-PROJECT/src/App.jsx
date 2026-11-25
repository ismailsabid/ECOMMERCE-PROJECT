import {HomePage} from './pages/HomePage.jsx'
import {Routes,Route} from 'react-router'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='checkout' element='checkout page'/>
        <Route path='orders' element='order page'/>
        <Route path='tracking' element='tracking page'/>
      </Routes>
    </>
  )
}

export default App
