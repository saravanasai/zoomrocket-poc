import Navbar from "../components/navigation/Navbar.jsx"
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Builder from "../pages/builder/index.jsx";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/builder" element={<Builder />} />
            </Routes>
        </>
    )
}

export default AppLayout