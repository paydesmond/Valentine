import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Valentine from './Pages/Valentine/Valentine';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';
import Notfound from './components/Notfound/Notfound';
import Documentation from './Pages/Documentation/Documentation';
import Asking from './Pages/Asking/Asking';
import Front from './Pages/Front/Front';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import FrontDocs from './components/FrontDocs/FrontDocs';
import WorkingOn from './Pages/WorkingOn/WorkingOn';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<ValentineLayout />}>
            {/* <Route path='documentation' element={<Front />} /> */}
            {/* <Route path='/' element={<Valentine />} /> */}
            <Route path='/' element={<WorkingOn />} />
            {/* <Route path='documentation' element={<Documentation />} /> */}
            <Route path='asking/:id' element={<Asking />} />
            <Route path='documentation' element={<FrontDocs />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
