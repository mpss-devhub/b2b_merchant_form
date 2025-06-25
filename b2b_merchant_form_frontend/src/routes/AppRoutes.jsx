import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicMerchantRegister from "../pages/PublicMerchantRegister";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicMerchantRegister />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
