import '../components/styles/App.css';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';

// import components
import Main from './Main';
import Quiz from './quiz';
import Result from './result';
import { CheckUserExist } from '../helper/helper';


// React Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz></Quiz></CheckUserExist> 
  },
  {
    path: '/result',
    element: <CheckUserExist><Result></Result></CheckUserExist>
  }
])
function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
 