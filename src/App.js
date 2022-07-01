import './App.css';
import Navbar from './components/Navbar';
/* Need to use HashRouter since BrowserRouter doesn't play nicely with gh pages*/
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Articles from './components/pages/Article/Articles'
import CTFwriteUps from './components/pages/CTFwriteups/CTFwriteups'
import Misc from './components/pages/Misc/Misc'
import Resources from './components/pages/Resources/Resources'
import Credits from './components/pages/Credits/Credits'

function App() {
  return (
    <>
      <Router basename="/">
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
