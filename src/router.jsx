import { Route, Routes, BrowserRouter } from "react-router-dom";
import { VisibilityFeatures } from "./pages/visibilityFeatures";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/visibility" element={<VisibilityFeatures />}/>
            </Routes>
        </BrowserRouter>
    )
}