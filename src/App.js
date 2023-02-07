import {CartProvider,CartContext} from "./components/ProviderCart"
import React, { useState, useContext ,createContext, useEffect}from 'react';
import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Pagination,Drawer } from 'antd';
function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json.products[0].description)
        setData(json.products) })
      .catch(error => setError(error));
  }, []);
  if (!data)
     return (<div>errrrrror</div>)
  return (
    <div className = "container">
        <CartProvider >
          <Header show = {showDrawer}/>
             <div className="row mt-5">
             {
              data.map((item,idx)=>{
              return(
                      <Product
                        key = {idx} 
                        title = {item.title}
                        description = {item.description}
                        imgs = {item.images}
                        price = {item.price}
                        />);
              })
             }
             </div>
        <Drawer title="shopping cart" placement="right" onClose={onClose} open={open}>
          <Cart />
      </Drawer>
         
          <Pagination defaultCurrent={1} total={50} />
        </CartProvider>
    </div>
  );
}
export default App;

