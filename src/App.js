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


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<ValentineLayout />}>
            <Route path='/' element={<Front />} />
            <Route path='askcrushout' element={<Valentine />} />
            <Route path='documentation' element={<Documentation />} />
            <Route path='asking' element={<Asking />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
