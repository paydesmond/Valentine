// import Toast from './components/Toast/Toast';
import './App.css';
import Valentine from './components/Valentine/Valentine';
import Asking from './components/Asking/Asking'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import AskingLayout from './Layouts/AskingLayout/AskingLayout';
import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/valentine' element={<HomeLayout/>}>
            <Route path='' element={<ValentineLayout/>}>
               <Route  path='' element={<Valentine/>}/>
            </Route>

            <Route path='asking' element={<AskingLayout/>}>
               <Route  path=':id' element={<Asking/>}/>
            </Route>
                
       </Route>
    )
  )

  return (
          <RouterProvider router={router}/>
  );
}

export default App;
