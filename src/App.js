// import Toast from './components/Toast/Toast';
import './App.css';
import Valentine from './Pages/Valentine/Valentine';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import AskingLayout from './Layouts/AskingLayout/AskingLayout';
import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import ValentineLayout from './Layouts/ValentineLayout/ValentineLayout';
import Notfound from './components/Notfound/Notfound';
import DocumentationLayout from './Layouts/DocumentationLayout/DocumentationLayout';
import Documentation from './Pages/Documentation/Documentation';
import Asking from './Pages/Asking/Asking';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/askcrushout' element={<HomeLayout/>}>

            <Route path='' element={<ValentineLayout/>}>
               <Route  path='' element={<Valentine/>}/>
            </Route>


           <Route path='documentation'  element={<DocumentationLayout/>}>
               <Route path='' element={<Documentation/>}/>
           </Route>

           
            <Route path='asking' element={<AskingLayout/>}>
               <Route  path=':id' element={<Asking/>}/>
            </Route> 


           <Route path='*' element={<Notfound/>}/>
       </Route>
    )
  )

  return (
          <RouterProvider router={router}/>
  );
}

export default App;
