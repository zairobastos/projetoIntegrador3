import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./config/globalStyles.styled";

import Login from "./views/Login/Login";

export const Routers = ()=>{
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
