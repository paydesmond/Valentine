import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Valentine from './Pages/Valentine/Valentine';
import AskingLayout from './Layouts/AskingLayout/AskingLayout';
import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';
import Notfound from './components/Notfound/Notfound';
import DocumentationLayout from './Layouts/DocumentationLayout/DocumentationLayout';
import Documentation from './Pages/Documentation/Documentation';
import Asking from './Pages/Asking/Asking';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomeLayout />}>

            <Route path='/askcrushout'  element={<ValentineLayout />}>
              <Route path='' element={<Valentine />} />
              <Route path='documentation' element={<Documentation />} />
              <Route path='asking/:id' element={<Asking />} />

            </Route>

            {/* <Route path='/documentation' element={<DocumentationLayout />}>
            </Route> */}

            {/* <Route path='/asking' element={<AskingLayout />}>
              <Route path=':id' element={<Asking />} />
            </Route> */}

            <Route path='*' element={<Notfound />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
