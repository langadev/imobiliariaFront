import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";


const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/entrar" element={<Login />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
