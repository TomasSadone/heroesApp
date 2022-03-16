import { Navbar } from "../components/ui/Navbar"
import { SearchScreen } from "../components/search/SearchScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Routes, Route } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";




export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="hero/:heroe" element={<HeroScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
