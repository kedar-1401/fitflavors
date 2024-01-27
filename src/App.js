// import './App.css'
import Home from "./screens/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Error from "./Components/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;