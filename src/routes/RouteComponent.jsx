import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/entrar" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
