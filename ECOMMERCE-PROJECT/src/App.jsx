import {HomePage} from './pages/HomePage/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage/OrdersPage.jsx'
import { TrackingPage } from './pages/TrackingPage/TrackingPage.jsx'
import {Routes,Route} from 'react-router'
import './App.css'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='checkout' element={<CheckoutPage/>}/>
        <Route path='orders' element={<OrdersPage/>}/>
        <Route path='tracking' element={<TrackingPage/>} />
      </Routes>
    </>
  )
}

export default App
