/* Need to use HashRouter since BrowserRouter doesn't play nicely with gh pages*/
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';

/*Nav Bar Pages*/
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Articles from './components/pages/Article/Articles'
import CTFwriteUps from './components/pages/CTFwriteups/CTFwriteups'
import Misc from './components/pages/Misc/Misc'
import Resources from './components/pages/Resources/Resources'
import Credits from './components/pages/Credits/Credits'
import Tags from './components/pages/Tags/Tags'

/*Article Pages*/
import LearningThePEFileFormat from './components/pages/Articles/Learning-The-PE-File-Format/Article'
import DLLInjection from './components/pages/Articles/DLL-Injection/Article'
import VaRvaAndFileOffsets from './components/pages/Articles/VA-RVA-And-FileOffsets/Article'


function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes>
          {/* Nav Bar Pages Routes */}
          <Route path='/' exact element={<Home />} />
          <Route path='/articles' exact element={<Articles />} />
          <Route path='/ctf-writeups' exact element={<CTFwriteUps/>} />
          <Route path='/misc' exact element={<Misc />} />
          <Route path='/tags' exact element={<Tags />} />
          <Route path='/resources' exact element={<Resources />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/credits' exact element={<Credits />} />

          {/* Article Routes */}
          <Route path='/articles/learning-the-pe-file-format' exact element={<LearningThePEFileFormat />}/>
          <Route path='/articles/dll-injection' exact element={<DLLInjection />}/>
          <Route path='/articles/va-rva-and-file-offsets' exact element={<VaRvaAndFileOffsets />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
