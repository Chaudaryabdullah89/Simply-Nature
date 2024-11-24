import { createContext, useState } from "react";
import { products } from '../assets/assets';
export  const ShopContext = createContext();


const ShopContextProvider = (props) => {
  
       
 const currency = '$';
 const delivery_fee = 10;
 const [search,setSearch] = useState('');
 const [showsearch,setShowsearch] = useState(true);
 const [cartitems,setcartitem] = useState({});

 const addtocart = async (itemid,size)=>{

   let cartdata = structuredClone(cartitems)

     if(cartdata[itemid]){
        if(cartdata[itemid][size]){
            cartdata[itemid][size] += 1
        }
        else{
            cartdata[itemid][size] = 1 
        }

     }
     else{
        cartdata[itemid] = {}
        cartdata[itemid][size] = 1; 
     }
     setcartitem(cartdata)
     console.log(cartdata);
     
 }

 const getCartCount = ()=>{
    let TotalCount  = 0;
    for(let items in cartitems){
        for(let item in cartitems[items]){
            try {
                if(cartitems[items][item ] > 0 ){

                    TotalCount += cartitems[items][item];
                }

                // eslint-disable-next-line no-empty
                } catch (error) {
                console.log(error);
                
            }
        }
    }
    return TotalCount
 }
 const updatequantity = async (itemid,size,quantity)=>{
    let cartdata = structuredClone(cartitems)
    cartdata[itemid][size] = quantity
    setcartitem(cartdata)
 }

    const value ={
products,currency,delivery_fee,search,setSearch,showsearch,setShowsearch,addtocart,getCartCount,updatequantity,cartitems
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;