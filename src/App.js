import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Valentine from './Pages/Valentine/Valentine';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';
import Notfound from './Pages/Notfound/Notfound';
import Asking from './Pages/Asking/Asking';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import FrontDocs from './Pages/FrontDocs/FrontDocs';
import WorkingOn from './Pages/WorkingOn/WorkingOn';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<ValentineLayout />}>
            <Route path='/' element={<Valentine />} />
            {/* <Route path='/' element={<WorkingOn />} /> */}
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
