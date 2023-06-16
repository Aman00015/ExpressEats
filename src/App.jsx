import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import './styles/mediaQuery.scss'
function App() {

  return (

 <Router>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/services' element={<Services />}/>
 </Routes>
 <Footer/>
 </Router>
  
  )
}

export default App
