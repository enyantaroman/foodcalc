import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./views/pages/Home";

function App() {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
