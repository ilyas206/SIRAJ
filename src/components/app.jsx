import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrayerTimes from "./prayerTimes";
import Layout from "./layout";
import Home from "./home";
import AsmaHusna from "./asmaHusna";
import FastingTimes from "./fastingTimes";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="prayerTimes" element={<PrayerTimes/>}/>
                    <Route path="fastingTimes" element={<FastingTimes/>}/>
                    <Route path="asmaHusna" element={<AsmaHusna/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}