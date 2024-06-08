import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home"
import Women from "../pages/Women"
import Men from "../pages/Men"
import Accessories from "../pages/Accessories"
import Shoes from "../pages/Shoes"
import LikeNew from "../pages/LikeNew"
import FathersDay from "../pages/FathersDay";
import SearchBar from "../pages/SearchBar";
import Login from "../pages/Login";
import Wishlist from "../pages/Wishlist";
import Kart from "../pages/Kart"

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/accessories" element={<Accessories/>}/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/likenew" element={<LikeNew/>}/>
            <Route path="/fathersday" element={<FathersDay/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/kart" element={<Kart/>}/>
        </Routes>
    )
}