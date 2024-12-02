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
import MainDisabel from "./components/disable/MainDisabel";
import { ParentComponent } from "./components/disable/ParentComponent";
import Profile from "./components/children/Profile";
import Gallery from "./components/gallery/Gallery";
import ProfileSecond from "./components/gallery/second-task/Profile";
import ConnectivityLabel from "./components/pwa/ConnectivityLabel";
import InstallApp from "./components/pwa/InstallApp";
import MobileView from "./components/mobileView/MobileView";

function App() {
  return (
      <Router>
         <Routes>
           <Route path="/" element={<InstallApp />} />
           <Route path="/leaderboard" element={<Leaderboard />} />
           <Route path="/border" element={<TicTacToe/>}/>
           <Route path="/productApp" element={<ProductApp/>}/>
           <Route path="/parent" element={<Parent/>}/>
           <Route path="/reducer" element={<Reducer/>}/>
           <Route path="/theme" element={<ThemeHome/>}/>
           <Route path="/domEvent" element={<DomEvent/>}/>
           <Route path="/mainDisabel" element={<MainDisabel/>}/>
           <Route path="/p" element={<ParentComponent/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/gallery" element={<Gallery/>}/>
           <Route path="/profileScond" element={<ProfileSecond/>}/>
           <Route path="/connectivityLabel" element={<Pwa/>}/>
           <Route path="/installApp" element={<ConnectivityLabel/>}/>
           <Route path="/mobileView" element={<MobileView/>}/>
         </Routes>
      </Router>
  )
}

export default App
