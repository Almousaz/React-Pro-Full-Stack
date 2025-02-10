import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './screen/LoginScreen.jsx';
import RegisterScreen from './screen/RegisterScreen.jsx';
import store from './store';
import { Provider } from 'react-redux';
import ProfileScreen from './screen/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      {/* priveate Routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);







createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Provider>
  
)
