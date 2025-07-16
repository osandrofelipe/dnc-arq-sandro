import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages & Components
import Home from './pages/Home'
import About from './pages/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//  UTILS

import ScrollTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrollTop />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> 
       </Routes>
    </Router>
  )
}

export default App
