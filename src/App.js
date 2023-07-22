import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import BuySell from "./pages/BuySell";
import Earnings from "./pages/Earnings";

function App() {
  return (
    <>
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/friends" element={<Friends/>} />
      <Route path="/buy-sell" element={<BuySell/>} />
      <Route path="/earnings" element={<Earnings/>} />

     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;