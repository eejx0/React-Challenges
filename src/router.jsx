import { Route, Routes, BrowserRouter } from "react-router-dom";
import { VisibilityFeatures } from "./pages/visibilityFeatures";
import { Login } from "./pages/login";
import { LoginList } from "./pages/loginList";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/visibility" element={<VisibilityFeatures />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/loginlist" element={<LoginList />}/>
            </Routes>
        </BrowserRouter>
    )
}