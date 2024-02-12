import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Valentine from './Pages/Valentine/Valentine';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';
import Notfound from './components/Notfound/Notfound';
import Documentation from './Pages/Documentation/Documentation';
import Asking from './Pages/Asking/Asking';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/'  element={<ValentineLayout />}>
              <Route path='' element={<Valentine />} />
              <Route path='/documentation' element={<Documentation />} />
              <Route path='/asking/:id' element={<Asking />} />
              <Route path='*' element={<Notfound />} />
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
