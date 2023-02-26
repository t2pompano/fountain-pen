import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import SingleProducts from './components/SingleProducts';
import Review from './components/Review';
import Dashboards from './components/Dashboards';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/:productId' element={<SingleProducts></SingleProducts>}></Route>
          <Route path='/reviews' element={<Review></Review>}></Route>
          <Route path='/dashboard' element={<Dashboards></Dashboards>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
