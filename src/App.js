import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';


function App() {

  const isSignedIn = useSelector(selectSignedIn);

  return (

    <div className="App">
      
      <Navbar/>
      <Home/>
      {isSignedIn && <News/>}
    </div>

  );
}

export default App;
