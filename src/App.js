import Home from './Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Deals from './components/Deals';
import AllCollections from './components/AllCollections';
import CollectionDetails from './components/CollectionDetails';
import ShoppingCart from './components/ShoppingCart';
import MorePage from './components/MorePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShoppingCartProvider from './context/ShoppingCartContext';
import ScrollToTop from './ScrollToTop';

import './App.css';
import OrderProcessedPage from './components/OrderProcessedPage';
import OrderCancelledPage from './components/OrderCancelledPage';

function App() {

  return (
    <ShoppingCartProvider>
    <Router>
      <div className="App">
        <Navbar></Navbar>
        {/* to scroll to top when changing page */}
        <ScrollToTop></ScrollToTop> 
        <Routes>
          <Route path='/' element={<Home ></Home>}></Route>
          <Route path= '/popular' element={<Popular></Popular>}> </Route>
          <Route path= '/deals' element={<Deals></Deals>}> </Route>
          <Route path= '/allcollections' element={<AllCollections></AllCollections>}></Route>
          <Route path='/allcollections/:id' element={<CollectionDetails></CollectionDetails>} ></Route>
          <Route path='cart' element={<ShoppingCart></ShoppingCart>}></Route>
          <Route path='more' element={<MorePage></MorePage>} ></Route>
          <Route path='success' element={<OrderProcessedPage></OrderProcessedPage>} ></Route>
          <Route path='cancel' element={<OrderCancelledPage></OrderCancelledPage>}></Route>
        </Routes>
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </Router>
    </ShoppingCartProvider>
  );
}

export default App;
