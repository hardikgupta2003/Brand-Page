import Navbar from './components/Navbar'
import Product from './components/Product';
import './App.css'
const App = () => {

  return (
    <div className='w-full h-full flex flex-col py-5'>
      <Navbar/>
      <div className="">
        <Product/>
      </div>

    </div>

  )
};

export default App;
