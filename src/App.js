import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Articles from './components/pages/Articles'
import CTFwriteUps from './components/pages/CTFwriteups'
import Misc from './components/pages/Misc'
import Resources from './components/pages/Resources'
import Credits from './components/pages/Credits'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/articles' exact element={<Articles />} />
          <Route path='/ctf-writeups' exact element={<CTFwriteUps/>} />
          <Route path='/misc' exact element={<Misc />} />
          <Route path='/resources' exact element={<Resources />} />
          <Route path='/credits' exact element={<Credits />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
