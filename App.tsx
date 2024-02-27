import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Home, Marketplace, Rankings, ConnectAWallet, CreateAcc } from "./pages/index"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/marketplace" element={ <Marketplace/> } />
          <Route path="/rankings" element={ <Rankings/> } />
          <Route path="/connect" element={ <ConnectAWallet/> } />
          <Route path="/create" element={ <CreateAcc/> } />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
