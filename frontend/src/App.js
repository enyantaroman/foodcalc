import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./views/pages/Home";
import FoodList from "./views/pages/FoodList";
import FoodCreate from "./views/pages/FoodCreate";
import FoodDetail from "./views/pages/FoodDetail";
import MenuList from "./views/pages/MenuList";
import MenuCreate from "./views/pages/MenuCreate";
import MenuDetail from "./views/pages/MenuDetail";
import CalcList from "./views/pages/CalcList";
import CalcCreate from "./views/pages/CalcCreate";
import CalcDetail from "./views/pages/CalcDetail";

function App() {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/food' element={<FoodList />} />
                    <Route path='/food/create' element={<FoodCreate />} />
                    <Route path='/food/:id' element={<FoodDetail />} />
                    <Route path='/menu' element={<MenuList />} />
                    <Route path='/menu/create' element={<MenuCreate />} />
                    <Route path='/menu/:id' element={<MenuDetail />} />
                    <Route path='/calc' element={<CalcList />} />
                    <Route path='/calc/create' element={<CalcCreate />} />
                    <Route path='/calc/:id' element={<CalcDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
