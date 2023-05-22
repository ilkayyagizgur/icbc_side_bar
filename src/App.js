import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from "./components/SideBar";
import DashBoard from "./pages/DashBoard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cari_islemler from "./pages/Cari_islemler";
import EOD_islemleri from "./pages/EOD_islemleri";
import BT_islemleri from "./pages/BT_islemleri";
import Cek_islemleri from "./pages/Cek_islemleri";
import Nakit_yonetimi_islemleri from "./pages/Nakit_yonetimi_islemleri";
import Internet_bankaciligi from "./pages/Internet_bankaciligi";
import Kurumsal_tahsilatlar from "./pages/Kurumsal_tahsilatlar";
import Istihbarat from "./pages/Istihbarat";
import Senetler from "./pages/Senetler";

const App = () => {
    return (
        <BrowserRouter>
            <SideBar>
                <Routes>
                    <Route path="/"element={<DashBoard/>}/>
                    <Route path="/dashboard"element={<DashBoard/>}/>
                    <Route path="/about"element={<About/>}/>
                    <Route path="comment/"element={<Comment/>}/>
                    <Route path="/analytics"element={<Analytics/>}/>
                    <Route path="/product"element={<Product/>}/>
                    <Route path="/productList"element={<ProductList/>}/>
                    <Route path="/eodislemleri"element={<EOD_islemleri/>}/>
                    <Route path="/cariislemler"element={<Cari_islemler/>}/>
                    <Route path="/btislemler"element={<BT_islemleri/>}/>
                    <Route path="/cekislemler"element={<Cek_islemleri/>}/>
                    <Route path="/nakityonetimiislemler"element={<Nakit_yonetimi_islemleri/>}/>
                    <Route path="/internetbankaciligi"element={<Internet_bankaciligi/>}/>
                    <Route path="/kurumsaltahsilatlar"element={<Kurumsal_tahsilatlar/>}/>
                    <Route path="/istihbarat"element={<Istihbarat/>}/>
                    <Route path="/senetler"element={<Senetler/>}/>
                </Routes>
            </SideBar>
        </BrowserRouter>
    );
};

export default App;
