import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Postpage from './pages/Postpage';
import Layout from './components/Layout';


let routes = (
  <Route element={<Layout/>}>
    <Route path="/" element={<Postpage />} />
    <Route path="/assets/:catId?/:tagId?/:search?/:userId?" element={<Postpage />} />
  </Route>
)

const router = createBrowserRouter(
  createRoutesFromElements(routes)
)

export default function App(){
  return <RouterProvider router={router}/>
}