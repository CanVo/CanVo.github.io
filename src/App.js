import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
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
          <Route path='/blog/' exact element={<Home />} />
          <Route path='/blog/articles' exact element={<Articles />} />
          <Route path='/blog/ctf-writeups' exact element={<CTFwriteUps/>} />
          <Route path='/blog/Misc' exact element={<Misc />} />
          <Route path='/blog/Resources' exact element={<Resources />} />
          <Route path='/blog/Credits' exact element={<Credits />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
