import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Leaderboard from "./components/leaderboard/Leaderboard";
import './index.css'
import TicTacToe from "./components/tiktak/Board";
import ProductApp from "./components/product/product";
import Pwa from "./components/pwa/Pwa";
import Parent from "./components/main/Parent";
import Reducer from "./components/main/reducer";
import ThemeHome from "./components/theme/ThemeHome";
import DomEvent from "./components/useful-types/DomEvent";

function App() {
  return (
      <Router>
         <Routes>
           <Route path="/" element={<Pwa />} />
           <Route path="/leaderboard" element={<Leaderboard />} />
           <Route path="/border" element={<TicTacToe/>}/>
           <Route path="/productApp" element={<ProductApp/>}/>
           <Route path="/parent" element={<Parent/>}/>
           <Route path="/reducer" element={<Reducer/>}/>
           <Route path="/theme" element={<ThemeHome/>}/>
           <Route path="/domEvent" element={<DomEvent/>}/>
         </Routes>
      </Router>
  )
}

export default App
