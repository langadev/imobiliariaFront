import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";



export default function App() {
  return (
    <div className="">
     <Navbar/>
     <div className=" w-full mt-20 ">
    <Products/>
     </div>
    </div>
   
  )
}