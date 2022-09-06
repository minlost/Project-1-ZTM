import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import './categories.styles.scss'
import './index.scss'
import { Routes, Route } from "react-router-dom";



const App = () =>{



 

const Shop = () => {
  return <h1> Hello</h1>
}


return(
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>

  ) 
}

export default App;
