
import './categories.styles.scss'
import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation.component';
import Auth from './routes/auth/auth.component';
import Shop from "./routes/shop/shop.component";



function App() {

  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route  index element={<Home/> }/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Route>
  

 
  </Routes>
  )
  
  
  
}

export default App;
