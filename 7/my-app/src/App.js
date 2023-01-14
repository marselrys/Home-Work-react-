import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import Login from "./pages/Login/Login";
import Layout from "./components/hoc/layout/Layout";


function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/blogs" element={<BlogsPage/>}/>
                </Route>

                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;